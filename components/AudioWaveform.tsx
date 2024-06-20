import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface AudioFile {
    id: string;
    url: string;
    duration?: number;
}

interface AudioWaveformProps {
    audioFiles: AudioFile[];
    isPlaying: boolean;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    wavesurfers: React.MutableRefObject<{ [key: string]: WaveSurfer | null }>;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({ audioFiles, isPlaying, setDuration, wavesurfers }) => {
    const initializeWaveSurfer = (containerRef: HTMLDivElement | null, audioUrl: string, projectId: string) => {
        if (containerRef && !wavesurfers.current[projectId]) {
            const wavesurfer = WaveSurfer.create({
                container: containerRef,
                waveColor: 'gray',
                progressColor: 'white',
                cursorColor: 'transparent',
                height: 45,
                barWidth: 4,
                barGap: 4,
                barRadius: 8,
                backend: 'MediaElement',
            });

            wavesurfer.load(audioUrl);
            wavesurfer.on('ready', () => {
                console.log(`WaveSurfer for ${projectId} is ready`);
                const duration = wavesurfer.getDuration();
                setDuration(duration);
                containerRef.style.width = `${duration * 20}px`; // Set the width based on duration
            });

            wavesurfers.current[projectId] = wavesurfer;
        }
    };

    const removeWaveSurfer = (projectId: string) => {
        const wavesurfer = wavesurfers.current[projectId];
        if (wavesurfer) {
            wavesurfer.pause(); // Pause instead of destroy
            // Optionally, you can hide the container or manage its visibility
        }
    };

    useEffect(() => {
        audioFiles.forEach((audioFile) => {
            const containerRef = document.getElementById(`waveform-${audioFile.id}`) as HTMLDivElement;
            initializeWaveSurfer(containerRef, audioFile.url, audioFile.id);
        });

        return () => {
            // No need to destroy wavesurfers here
        };
    }, [audioFiles, setDuration, wavesurfers]);

    return (
        <div className="w-auto flex flex-col">
            {audioFiles.map((audioFile) => (
                <div
                    key={audioFile.id}
                    className="w-auto relative h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary mt-2 mr-2 ml-2"
                >
                    <div id={`waveform-${audioFile.id}`} className="waveform-container" />
                </div>
            ))}
        </div>
    );
};

export default AudioWaveform;



// import React, { useRef, useState, useEffect } from 'react';
// import WaveSurfer from 'wavesurfer.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// interface AudioFile {
//     id: string;
//     url: string;
//     duration?: number;
// }

// interface AudioWaveformProps {
//     setDuration: React.Dispatch<React.SetStateAction<number>>;
// }

// const AudioWaveform: React.FC<AudioWaveformProps> = ({ setDuration }) => {
//     const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
//     const [isDragAndDropVisible, setIsDragAndDropVisible] = useState(true);
//     const wavesurfers = useRef<{ [key: string]: WaveSurfer | null }>({});
//     const fileInputRef = useRef<HTMLInputElement>(null);

//     const handleFiles = (files: FileList) => {
//         const newAudioFiles: AudioFile[] = Array.from(files).map((file) => ({
//             id: file.name,
//             url: URL.createObjectURL(file),
//         }));

//         setAudioFiles((prevFiles) => [...prevFiles, ...newAudioFiles]);
//         if (newAudioFiles.length > 0) {
//             setIsDragAndDropVisible(false);
//         }
//     };

//     const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//         event.preventDefault();
//         handleFiles(event.dataTransfer.files);
//     };

//     const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//         event.preventDefault();
//     };

//     const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             handleFiles(event.target.files);
//         }
//     };

//     const initializeWaveSurfer = (containerRef: HTMLDivElement | null, audioUrl: string, projectId: string) => {
//         if (containerRef && !wavesurfers.current[projectId]) {
//             const wavesurfer = WaveSurfer.create({
//                 container: containerRef,
//                 waveColor: 'gray',
//                 progressColor: 'white',
//                 cursorColor: 'transparent',
//                 height: 45,
//                 barWidth: 4,
//                 barGap: 4,
//                 barRadius: 8,
//                 backend: 'MediaElement',
//             });

//             wavesurfer.load(audioUrl);
//             wavesurfer.on('ready', () => {
//                 const duration = wavesurfer.getDuration();
//                 setAudioFiles((prevFiles) =>
//                     prevFiles.map((file) =>
//                         file.id === projectId ? { ...file, duration } : file
//                     )
//                 );
//                 setDuration(duration);
//                 wavesurfer.play(); // Auto-play when ready
//             });

//             wavesurfers.current[projectId] = wavesurfer;
//         }
//     };

//     useEffect(() => {
//         return () => {
//             Object.values(wavesurfers.current).forEach((ws) => {
//                 if (ws) {
//                     ws.pause();
//                     ws.unAll();
//                     ws.destroy();
//                 }
//             });
//         };
//     }, []);

//     useEffect(() => {
//         audioFiles.forEach((audioFile) => {
//             const containerRef = document.getElementById(`waveform-${audioFile.id}`) as HTMLDivElement;
//             initializeWaveSurfer(containerRef, audioFile.url, audioFile.id);
//         });
//     }, [audioFiles]);

//     const togglePlayPause = (projectId: string) => {
//         const wavesurfer = wavesurfers.current[projectId];
//         if (wavesurfer) {
//             if (wavesurfer.isPlaying()) {
//                 wavesurfer.pause();
//             } else {
//                 wavesurfer.play();
//             }
//         }
//     };

//     return (
//         <button onClick={() => fileInputRef.current?.click()} className="w-full">
//             {isDragAndDropVisible && (
//                 <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     className="border-2 border-dashed border-secondary p-4 rounded-lg h-20 flex items-start"
//                 >
//                     <p className="text-nowrap text-white text-opacity-50 text-xs">Drag and drop or add your audio files here</p>
//                     <input
//                         type="file"
//                         ref={fileInputRef}
//                         style={{ display: 'none' }}
//                         accept="audio/*"
//                         multiple
//                         onChange={handleFileInputChange}
//                     />
//                 </div>
//             )}
//             <div className="flex flex-wrap gap-2">
//                 {audioFiles.map((audioFile) => (
//                     <div
//                         key={audioFile.id}
//                         className="relative h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary"
//                         style={{ width: `${audioFile.duration ? audioFile.duration * 10 : 64}px` }}
//                     >
//                         {/* Play/Pause Button */}
//                         <button
//                             className="absolute top-2 left-2 bg-white p-1 w-4 h-4 rounded-full cursor-pointer z-50"
//                             onClick={() => togglePlayPause(audioFile.id)}
//                         >
//                             <FontAwesomeIcon
//                                 className="flex justify-center items-center w-full h-full"
//                                 icon={wavesurfers.current[audioFile.id]?.isPlaying() ? faPause : faPlay}
//                             />
//                         </button>
//                         <div id={`waveform-${audioFile.id}`} />
//                     </div>
//                 ))}
//             </div>
//         </button>
//     );
// };

// export default AudioWaveform;



// import React, { useRef, useEffect } from 'react';
// import WaveSurfer from 'wavesurfer.js';

// interface AudioFile {
//     id: string;
//     url: string;
//     duration?: number;
// }

// interface AudioWaveformProps {
//     audioFiles: AudioFile[];
//     isPlaying: boolean;
//     setDuration: React.Dispatch<React.SetStateAction<number>>;
//     wavesurfers: React.MutableRefObject<{ [key: string]: WaveSurfer | null }>;
// }

// const AudioWaveform: React.FC<AudioWaveformProps> = ({ audioFiles, isPlaying, setDuration, wavesurfers }) => {
//     const initializeWaveSurfer = (containerRef: HTMLDivElement | null, audioUrl: string, projectId: string) => {
//         if (containerRef && !wavesurfers.current[projectId]) {
//             const wavesurfer = WaveSurfer.create({
//                 container: containerRef,
//                 waveColor: 'gray',
//                 progressColor: 'white',
//                 cursorColor: 'transparent',
//                 height: 45,
//                 barWidth: 4,
//                 barGap: 4,
//                 barRadius: 8,
//                 backend: 'MediaElement',
//             });

//             wavesurfer.load(audioUrl);
//             wavesurfer.on('ready', () => {
//                 console.log(`WaveSurfer for ${projectId} is ready`);
//                 const duration = wavesurfer.getDuration();
//                 setDuration(duration);
//             });

//             wavesurfers.current[projectId] = wavesurfer;
//         }
//     };

//     useEffect(() => {
//         audioFiles.forEach((audioFile) => {
//             const containerRef = document.getElementById(`waveform-${audioFile.id}`) as HTMLDivElement;
//             initializeWaveSurfer(containerRef, audioFile.url, audioFile.id);
//         });

//         return () => {
//             Object.values(wavesurfers.current).forEach((ws) => ws?.destroy());
//         };
//     }, [audioFiles, setDuration, wavesurfers]);

//     const togglePlayPause = (projectId: string) => {
//         const wavesurfer = wavesurfers.current[projectId];
//         if (wavesurfer) {
//             if (wavesurfer.isPlaying()) {
//                 wavesurfer.pause();
//             } else {
//                 wavesurfer.play();
//             }
//         }
//     };

//     return (
//         <div className="relative">
//             <div className="w-full flex flex-col gap-2 m-2">
//                 {audioFiles.map((audioFile) => (
//                     <div
//                         key={audioFile.id}
//                         className="w-full relative h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary"
//                     >
//                         <div id={`waveform-${audioFile.id}`} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AudioWaveform;