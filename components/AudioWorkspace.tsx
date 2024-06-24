import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { WaveSurferOptions } from 'wavesurfer.js';
import Timestamps from './Timestamps';

interface AudioFile {
    id: string;
    url: string;
    duration?: number;
}

const AudioWorkspace: React.FC = () => {
    const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const wavesurfers = useRef<{ [key: string]: WaveSurfer | null }>({});
    const hoverLineRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [seekPosition, setSeekPosition] = useState(0); // Track seek position during dragging

    useEffect(() => {
        // Clean up: destroy WaveSurfer instances when the component unmounts
        return () => {
            Object.values(wavesurfers.current).forEach((wavesurfer) => {
                if (wavesurfer) {
                    wavesurfer.destroy();
                }
            });
        };
    }, []);

    useEffect(() => {
        audioFiles.forEach((file) => {
            const waveformId = `waveform-${file.id}`;
            if (!wavesurfers.current[waveformId]) {
                const options: WaveSurferOptions = {
                    container: `#${waveformId}`,
                    waveColor: 'gray',
                    progressColor: 'white',
                    cursorColor: 'transparent',
                    height: 45,
                    barWidth: 4,
                    barGap: 4,
                    barRadius: 8,
                    backend: 'MediaElement', // Ensure this is one of the allowed values
                    cursorWidth: 1,
                    dragToSeek: true,
                };

                const wavesurfer = WaveSurfer.create(options);

                wavesurfer.load(file.url);
                wavesurfers.current[waveformId] = wavesurfer;

                wavesurfer.on('ready', () => {
                    const trackDuration = wavesurfer.getDuration();
                    if (trackDuration > duration) {
                        setDuration(trackDuration);
                    }
                    const container = document.getElementById(waveformId);
                    if (container) {
                        container.style.width = `${trackDuration * 20}px`; // Adjust the multiplier as needed
                    }
                });

                wavesurfer.on('audioprocess', () => {
                    // Update hover line position based on playback progress
                    if (hoverLineRef.current && wavesurfer.isPlaying()) {
                        const container = document.getElementById(waveformId);
                        if (container) {
                            const rect = container.getBoundingClientRect();
                            const progress = wavesurfer.getCurrentTime() / wavesurfer.getDuration();
                            const positionX = rect.width * progress;
                            hoverLineRef.current.style.left = `${positionX}px`;
                        }
                    }
                });
            }
        });
    }, [audioFiles, duration]);

    const handleDragStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        handleDragMove(event); // Update position immediately on start
    };

    const handleDragMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDragging) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const percentage = x / rect.width;
            const time = percentage * duration;

            // Update the position of the hover line
            if (hoverLineRef.current) {
                hoverLineRef.current.style.left = `${x}px`;
            }

            // Update seek position
            setSeekPosition(time);

            // Seek to the calculated time in all WaveSurfer instances
            Object.values(wavesurfers.current).forEach((wavesurfer) => {
                if (wavesurfer && Number.isFinite(time)) {
                    wavesurfer.seekTo(time / wavesurfer.getDuration());
                }
            });
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);

        // Autoplay if playing was active during dragging
        if (isPlaying) {
            Object.values(wavesurfers.current).forEach((wavesurfer) => {
                if (wavesurfer) {
                    wavesurfer.play();
                }
            });
        }
    };

    const handleFiles = (files: FileList) => {
        const newAudioFiles: AudioFile[] = Array.from(files).map((file) => ({
            id: uuidv4(),
            url: URL.createObjectURL(file),
        }));

        setAudioFiles((prevFiles) => [...prevFiles, ...newAudioFiles]);

        // Clear the file input value to allow re-upload of the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handlePlayPauseAll = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        Object.values(wavesurfers.current).forEach((wavesurfer) => {
            if (wavesurfer) {
                if (isPlaying) {
                    wavesurfer.pause();
                } else {
                    wavesurfer.play();
                }
            }
        });
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        handleFiles(event.dataTransfer.files);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            handleFiles(event.target.files);
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full flex min-h-screen text-gray-200 overflow-hidden">
            <FontAwesomeIcon
                className="flex justify-center items-center w-4 h-4 p-2 bg-tertiary rounded-full absolute top-2 z-50"
                onClick={handlePlayPauseAll}
                icon={isPlaying ? faPause : faPlay}
            />
            <div
                className="w-full min-h-screen text-gray-200 overflow-x-auto relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onMouseMove={handleDragMove}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
            >
                <Timestamps duration={duration} containerWidth={400} />
                <div
                    ref={hoverLineRef}
                    className="absolute h-full bg-white z-50"
                    style={{ width: '1px', top: '0', left: '0' }}
                />
                <div className="inline-flex flex-col">
                    {audioFiles.map((audioFile) => (
                        <div
                            key={audioFile.id}
                            id={`waveform-container-${audioFile.id}`}
                            className="relative inline-block h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary mt-2 mr-2 ml-2 group"
                        >
                            <div id={`waveform-${audioFile.id}`} />
                        </div>
                    ))}
                </div>
                <button className="w-full p-2 sticky left-0 top-0" onClick={openFileDialog}>
                    <div className="border-2 border-dashed border-secondary p-4 rounded-lg h-20 flex items-start w-full">
                        <p className="text-nowrap text-white text-opacity-50 text-xs select-none">
                            Drag and drop or add your audio files here
                        </p>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="audio/*"
                        multiple
                        onChange={handleFileInputChange}
                    />
                </button>
            </div>
        </div>
    );
};

export default AudioWorkspace;
