import React, { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface AudioFile {
    id: string;
    url: string;
    duration?: number;
}

interface TimelineSeekerProps {
    wavesurfers: { [key: string]: WaveSurfer | null };
    audioFiles: AudioFile[];
    isPlaying: boolean;
    currentTime: number;
    onSeek: (time: number) => void;
    containerWidth: number;
    duration: number;
}

const TimelineSeeker: React.FC<TimelineSeekerProps> = ({
    wavesurfers,
    audioFiles,
    isPlaying,
    currentTime,
    onSeek,
    containerWidth,
    duration,
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const minCount = 30;
    const [timestamps, setTimestamps] = useState<number[]>([]);

    useEffect(() => {
        const maxCount = Math.max(minCount, Math.ceil(duration));
        const timestampCount = Math.min(maxCount, Math.floor(containerWidth / 20)); // Adjust divisor as needed

        const newTimestamps = Array.from({ length: timestampCount }, (_, i) => (i + 1) * Math.ceil(duration / timestampCount));
        setTimestamps(newTimestamps);
    }, [containerWidth, duration]);

    useEffect(() => {
        const handleProgress = (wave: WaveSurfer) => {
            if (wave.isPlaying()) {
                const newTime = wave.getCurrentTime();
                const newDuration = wave.getDuration();

                if (!isNaN(newTime) && isFinite(newTime) && newDuration > 0 && !isNaN(newDuration) && isFinite(newDuration)) {
                    const progress = newTime / newDuration;
                    onSeek(progress * duration);
                }
            }
        };

        // Listen to wavesurfer events to update currentTime
        Object.values(wavesurfers).forEach((wavesurfer) => {
            if (wavesurfer) {
                wavesurfer.on('audioprocess', () => handleProgress(wavesurfer));
            }
        });

        // Clean up event listeners
        return () => {
            Object.values(wavesurfers).forEach((wavesurfer) => {
                if (wavesurfer) {
                    wavesurfer.un('audioprocess');
                }
            });
        };
    }, [wavesurfers, onSeek, duration]);

    return (
        <div className="w-full h-14 px-4 bg-secondary border-b border-secondary justify-start items-center gap-2.5 flex">
            <div className="w-full h-6 justify-between items-center flex">
                {timestamps.map((number) => (
                    <div
                        key={number}
                        className={`text-xs font-medium pr-4 ${number % 4 === 1 ? 'text-white' : 'opacity-50 text-white'}`}
                    >
                        {number}
                    </div>
                ))}
                {/* Timeline UI components */}
                {audioFiles.map((audioFile) => (
                    <div
                        key={audioFile.id}
                        className="relative h-6 bg-primary rounded-lg"
                        style={{ width: `${audioFile.duration ? audioFile.duration * 10 : 640}px` }}
                    >
                        {/* Timeline seeker handle */}
                        <div
                            className="absolute top-0 left-0 h-full bg-white rounded-lg"
                            style={{ width: `${currentTime * 10}px` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineSeeker;


// import React, { useState, useEffect } from 'react';
// import WaveSurfer from 'wavesurfer.js';

// interface AudioFile {
//     id: string;
//     url: string;
//     duration?: number;
// }

// interface TimelineSeekerProps {
//     wavesurfers: { [key: string]: WaveSurfer | null };
//     audioFiles: AudioFile[];
//     isPlaying: boolean;
//     currentTime: number;
//     onSeek: (time: number) => void;
// }

// const TimelineSeeker: React.FC<TimelineSeekerProps> = ({ wavesurfers, audioFiles, isPlaying, currentTime, onSeek }) => {
//     const [isDragging, setIsDragging] = useState(false);

//     const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
//         setIsDragging(true);

//         const initialPosition = event.clientX;

//         const handleDragMove = (e: MouseEvent) => {
//             if (!isDragging) return;

//             const newPosition = e.clientX;
//             const delta = newPosition - initialPosition;
//             const newTime = currentTime + delta / 10; // Adjust multiplier as needed
//             onSeek(newTime);

//             // Update initialPosition to current position for next move calculation
//             // Note: Avoid directly modifying initialPosition as it's constant
//             // Use closure variable or state to hold the initial position instead
//         };

//         const handleDragEnd = () => {
//             setIsDragging(false);
//             document.removeEventListener('mousemove', handleDragMove);
//             document.removeEventListener('mouseup', handleDragEnd);
//         };

//         document.addEventListener('mousemove', handleDragMove);
//         document.addEventListener('mouseup', handleDragEnd);
//     };

//     useEffect(() => {
//         const handleProgress = (wave: WaveSurfer) => {
//             if (wave.isPlaying()) {
//                 const newTime = wave.getCurrentTime();
//                 const newDuration = wave.getDuration();

//                 if (!isNaN(newTime) && isFinite(newTime) && newDuration > 0 && !isNaN(newDuration) && isFinite(newDuration)) {
//                     const progress = newTime / newDuration;
//                     onSeek(progress);
//                 }
//             }
//         };

//         // Listen to wavesurfer events to update currentTime
//         Object.values(wavesurfers).forEach((wavesurfer) => {
//             if (wavesurfer) {
//                 wavesurfer.on('audioprocess', () => handleProgress(wavesurfer));
//             }
//         });

//         // Clean up event listeners
//         return () => {
//             Object.values(wavesurfers).forEach((wavesurfer) => {
//                 if (wavesurfer) {
//                     wavesurfer.un('audioprocess');
//                 }
//             });
//         };
//     }, [wavesurfers, onSeek]);

//     return (
//         <div className="w-full h-14 px-4 bg-secondary border-b border-secondary justify-start items-center gap-2.5 flex relative">
//             {/* Vertical timeline line */}
//             <div className="absolute h-full bg-white w-px left-1/2 top-0 transform -translate-x-1/2" />

//             {/* Time markers */}
//             <div className="absolute top-0 left-0 flex gap-4 text-xs text-gray-400">
//                 {audioFiles.map((audioFile) => (
//                     <div
//                         key={audioFile.id}
//                         className="relative"
//                         style={{ width: `${audioFile.duration ? audioFile.duration * 10 : 640}px` }}
//                     >
//                         <span className="absolute top-0 -mt-5">{Math.floor(currentTime)}</span>
//                     </div>
//                 ))}
//             </div>

//             <div className="w-full h-6 justify-between items-center flex relative">
//                 {/* Timeline UI components */}
//                 {audioFiles.map((audioFile) => (
//                     <div
//                         key={audioFile.id}
//                         className="relative"
//                         style={{ width: `${audioFile.duration ? audioFile.duration * 10 : 640}px` }}
//                     >
//                         {/* Timeline seeker handle */}
//                         <div
//                             className="absolute top-0 left-0 h-full bg-white rounded-lg"
//                             style={{ width: `${currentTime * 10}px` }}
//                         />
//                         {/* Draggable triangle element */}
//                         <div
//                             className="absolute top-0 transform -translate-y-2 -translate-x-2 border-l-4 border-t-4 border-transparent cursor-pointer"
//                             style={{
//                                 left: `${currentTime * 10}px`,
//                                 width: 0,
//                                 height: 0,
//                                 borderTopColor: 'transparent',
//                                 borderBottomColor: 'transparent',
//                                 borderRightColor: 'white',
//                             }}
//                             onMouseDown={handleDragStart}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TimelineSeeker;
