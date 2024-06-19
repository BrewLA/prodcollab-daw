import React from 'react'

function AudioImport() {
    return (
        <div className="w-auto h-full p-4 bg-secondary border-r border-secondary flex-col justify-start items-start gap-4 inline-flex">
            <div className="justify-between items-center flex w-full">
                <h2 className="text-xs text-white font-medium">Imported Audio</h2>
                <div className="w-6 h-6 rotate-90 rounded-lg border border-secondary flex-col justify-center items-center inline-flex">
                    <svg className="rotate-[-90deg]" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1.17678 4.82322C1.07915 4.92085 1.07915 5.07915 1.17678 5.17678L5 9" stroke="#E3E3E3" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
                <div className="p-2 bg-tertiary rounded-lg flex-col justify-start items-start gap-2 flex">
                    <div className="w-36 justify-between items-center inline-flex">
                        <div className="opacity-50 text-white text-opacity-50 text-xs font-medium">Drum Pack</div>
                        <div className="w-4 h-4 relative" />
                    </div>
                    <div className="border-l border-white border-opacity-15 justify-start items-start gap-2.5 inline-flex">
                        <div className="py-2 px-4 flex-col justify-start items-start gap-4 inline-flex text-xs text-white font-medium">
                            <h3>Kick_01.wav</h3>
                            <h3>Kick_02.wav</h3>
                            <h3>Kick_03.wav</h3>
                            <h3>HiHat_01.wav</h3>
                            <h3>HiHat_02.wav</h3>
                            <h3>Snare_01.wav</h3>
                            <h3>808_RnB_Drake.wav</h3>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-tertiary rounded-lg justify-start items-start flex w-full">
                    <div className="h-4 justify-between items-center flex">
                        <h2 className="text-neutral-200 text-xs font-medium">VOX</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioImport