import React, { useState, useRef } from 'react';
import AudioWaveform from './AudioWaveform';
import Timestamps from './Timestamps';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

interface AudioFile {
    id: string;
    url: string;
    duration?: number;
}

const AudioWorkspace: React.FC = () => {
    const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const wavesurfers = useRef<{ [key: string]: WaveSurfer | null }>({});

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

    const handleSeek = (time: number) => {
        if (!Number.isFinite(time)) {
            console.error(`Invalid time value: ${time}`);
            return;
        }

        setCurrentTime(time);

        Object.values(wavesurfers.current).forEach((wavesurfer) => {
            if (wavesurfer && wavesurfer.getDuration() > 0) {
                const newTime = time * wavesurfer.getDuration();
                wavesurfer.seekTo(newTime / wavesurfer.getDuration());
            }
        });
    };

    return (
        <div className="w-full flex min-h-screen text-gray-200 overflow-hidden">
            <FontAwesomeIcon
                className="flex justify-center items-center w-4 h-4 p-2 bg-tertiary rounded-full absolute top-2 z-50"
                onClick={handlePlayPauseAll}
                icon={isPlaying ? faPause : faPlay}
            />
            <div className="w-full min-h-screen text-gray-200 overflow-x-auto" onDrop={handleDrop} onDragOver={handleDragOver}>
                <Timestamps containerWidth={200} duration={duration} />
                <AudioWaveform
                    audioFiles={audioFiles}
                    isPlaying={isPlaying}
                    setDuration={setDuration}
                    wavesurfers={wavesurfers}
                />
                <button className="w-full p-2" onClick={openFileDialog}>
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
