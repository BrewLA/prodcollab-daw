import AudioImport from '@/components/AudioImport';
import AudioWorkspace from '@/components/AudioWorkspace';
import MixControls from '@/components/MixControls';
import TrackInfo from '@/components/TrackInfo';
import React from 'react';

const Layout = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full">
                {/* Audio Import Sidebar */}
                <AudioImport />
                <TrackInfo />
                <AudioWorkspace />
            </div>
            <MixControls />
        </div>
    )
};

export default Layout;