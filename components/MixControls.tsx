import React from 'react';

const MixControls = () => {
    const mixControlsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <div className="flex gap-2 p-2 sticky bottom-0 bg-secondary border-t border-secondary">
            <div className="flex  justify-between  gap-2 overflow-x-auto">
            {mixControlsArray.map((index) => (
                <div key={index} className="h-60 p-2 bg-secondary rounded-lg border border-secondary flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-20 self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="h-auto w-full justify-between items-center flex">
                            <div className="text-neutral-200 text-xs font-medium">Master</div>
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
                        </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="w-3 self-stretch relative">
                            <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
                            <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
                        </div>
                        <div className="w-6 self-stretch justify-start items-center gap-2 flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="flex flex-col gap-2">
                                    <div className="w-2 h-40 bg-tertiary rounded-full" />
                                    <h2 className="text-white text-xs font-medium">L</h2>
                                </div>
                            </div>
                            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="flex flex-col gap-2">
                                    <div className="w-2 h-40 bg-tertiary rounded-full" />
                                    <h2 className="text-white text-xs font-medium">R</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default MixControls;






// import React from 'react';

// function MixControls() {
//     return (
//         <div className="w-full h-auto p-2 bg-secondary justify-start items-start gap-2 inline-flex absolute bottom-0 border-t border-secondary">
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-60 p-2 bg-secondary rounded-lg border bg-secondary flex-col justify-start items-start gap-4 inline-flex">
//                 <div className="self-stretch justify-start items-start gap-8 inline-flex">
//                     <div className="h-3.5 justify-between items-center flex">
//                         <div className="text-neutral-200 text-xs font-medium">Master</div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full border border-zinc-700" />
//                     </div>
//                 </div>
//                 <div className="self-stretch justify-between items-center inline-flex">
//                     <div className="w-3 self-stretch relative">
//                         <div className="w-2 h-48 left-[2px] top-0 absolute bg-tertiary rounded-full" />
//                         <div className="w-3 h-3 left-0 top-[51px] absolute bg-zinc-400 rounded-full" />
//                     </div>
//                     <div className="w-6 self-stretch justify-start items-center gap-2 flex">
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">L</div>
//                         </div>
//                         <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
//                             <div className="w-2 bg-tertiary rounded-full" />
//                             <div className="text-white text-xs font-medium">R</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MixControls;