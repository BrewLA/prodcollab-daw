// import React from 'react';
// import TabList from './TabList';

// function TrackInfo() {
//     const tabs = ['Bar', 'Wave'];

//     return (
//         <div className="w-60 h-full flex-col border-r border-secondary bg-secondary justify-start items-start inline-flex">
//             <div className="self-stretch h-14 px-4 border-b border-secondary justify-between items-center inline-flex">
//                 <div className="text-white text-xs">Audio View</div>
//                 <TabList tabs={tabs} />
//             </div>
//             <div className="p-2 bg-secondary flex-col justify-start items-start gap-2 flex">
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="w-36 flex-col justify-start items-start gap-2 inline-flex">
//                         <div className="text-neutral-200 text-xs">Melody</div>
//                     </div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
//                 </div>
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="text-neutral-200 text-xs">Lead</div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
//                 </div>
//                 <div className="w-56 h-20 p-2 bg-secondary rounded-lg border border-secondary flex-col justify-between items-start flex">
//                     <div className="self-stretch justify-between items-start inline-flex">
//                         <div className="text-neutral-200 text-xs">Kick</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
//                     </div>
//                     <div className="justify-start items-start gap-1.5 inline-flex">
//                         <div className="px-1 py-0.5 rounded border border-secondary justify-start items-start gap-2.5 flex">
//                             <div className="text-zinc-700 text-xs">2</div>
//                         </div>
//                         <div className="px-1 py-0.5 rounded border border-neutral-200 justify-start items-start gap-2.5 flex">
//                             <div className="text-neutral-200 text-xs">4</div>
//                         </div>
//                         <div className="px-1 py-0.5 rounded border border-secondary justify-start items-start gap-2.5 flex">
//                             <div className="text-zinc-700 text-xs">8</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-56 h-20 p-2 bg-secondary rounded-lg border border-secondary flex-col justify-between items-start flex">
//                     <div className="self-stretch justify-between items-start inline-flex">
//                         <div className="text-neutral-200 text-xs">HiHat</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
//                     </div>
//                     <div className="justify-start items-start gap-1.5 inline-flex">
//                         <div className="px-1 py-0.5 rounded border border-secondary justify-start items-start gap-2.5 flex">
//                             <div className="text-zinc-700 text-xs">2</div>
//                         </div>
//                         <div className="px-1 py-0.5 rounded border border-secondary justify-start items-start gap-2.5 flex">
//                             <div className="text-zinc-700 text-xs">4</div>
//                         </div>
//                         <div className="px-1 py-0.5 rounded border border-neutral-200 justify-start items-start gap-2.5 flex">
//                             <div className="text-neutral-200 text-xs">8</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="text-neutral-200 text-xs">Snare</div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
//                 </div>
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="opacity-50 text-neutral-200 text-xs">Track 6</div>
//                     <div className="w-3 h-3 rounded-full border border-secondary" />
//                 </div>
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="opacity-50 text-neutral-200 text-xs">Track 7</div>
//                     <div className="w-3 h-3 rounded-full border border-secondary" />
//                 </div>
//                 <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
//                     <div className="opacity-50 text-neutral-200 text-xs">Track 8</div>
//                     <div className="w-3 h-3 rounded-full border border-secondary" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TrackInfo;

import React, { useState } from 'react';
import TabList from './TabList';
import TrackInfoControls from './TrackInfoControls';

interface TrackInfoProps { }

interface TrackNames {
    melody: string;
    lead: string;
    kick: string;
    hihat: string;
    snare: string;
}

const TrackInfo: React.FC<TrackInfoProps> = () => {
    const tabs = ['Bar', 'Wave'];
    const [trackNames, setTrackNames] = useState<TrackNames>({
        melody: 'Melody',
        lead: 'Lead',
        kick: 'Kick',
        hihat: 'HiHat',
        snare: 'Snare',
    });

    const handleTrackNameChange = (trackKey: keyof TrackNames, newName: string) => {
        setTrackNames(prevNames => ({
            ...prevNames,
            [trackKey]: newName
        }));
    };

    const handleGroupChange = (value: string, groupName: string) => {
        console.log(`Selected value in ${groupName}: ${value}`);
        // Handle state or application logic here
    };


    return (
        <div className="w-60 h-full flex-col border-r border-secondary bg-secondary justify-start items-start inline-flex">
            <div className="self-stretch h-14 px-4 border-b border-secondary justify-between items-center inline-flex">
                <div className="text-white text-xs">Audio View</div>
                <TabList tabs={tabs} />
            </div>
            <div className="p-2 bg-secondary flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
                    <div className="w-36 flex-col justify-start items-start gap-2 inline-flex">
                        <input
                            type="text"
                            value={trackNames.melody}
                            onChange={(e) => handleTrackNameChange('melody', e.target.value)}
                            className="text-neutral-200 text-xs bg-transparent border-none rounded-sm focus:outline-dashed focus:outline-gray-500"
                        />
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
                </div>
                <div className="self-stretch h-20 p-2 bg-secondary rounded-lg border border-secondary justify-between items-start inline-flex">
                    <input
                        type="text"
                        value={trackNames.lead}
                        onChange={(e) => handleTrackNameChange('lead', e.target.value)}
                        className="text-neutral-200 text-xs bg-transparent border-none rounded-sm focus:outline-dashed focus:outline-gray-500"
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
                </div>
                <div className="w-56 h-20 p-2 bg-secondary rounded-lg border border-secondary flex-col justify-between items-start flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                        <input
                            type="text"
                            value={trackNames.kick}
                            onChange={(e) => handleTrackNameChange('kick', e.target.value)}
                            className="text-neutral-200 text-xs bg-transparent border-none rounded-sm focus:outline-dashed focus:outline-gray-500"
                        />
                        <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
                    </div>
                    <TrackInfoControls
                        groupName="group1"
                        options={['2', '4', '8']}
                        onChange={(value) => handleGroupChange(value, 'group1')}
                    />
                </div>
                <div className="w-56 h-20 p-2 bg-secondary rounded-lg border border-secondary flex-col justify-between items-start flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                        <input
                            type="text"
                            value={trackNames.hihat}
                            onChange={(e) => handleTrackNameChange('hihat', e.target.value)}
                            className="text-neutral-200 text-xs bg-transparent border-none rounded-sm focus:outline-dashed focus:outline-gray-500"
                        />
                        <div className="w-3 h-3 bg-green-500 rounded-full border border-secondary" />
                    </div>
                    <TrackInfoControls
                        groupName="group2"
                        options={['2', '4', '8']}
                        onChange={(value) => handleGroupChange(value, 'group2')}
                    />
                </div>
                {/* Remaining track elements */}
            </div>
        </div>
    )
}

export default TrackInfo;
