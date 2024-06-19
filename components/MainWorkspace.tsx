import React from 'react';
import DraggableShape from './DraggableShape';

const tracks = [0, 1, 2, 3, 4]; // Example track positions

const MainWorkspace = () => {

    return (
        <div className="relative overflow-x-auto">
            <div className="w-auto h-full flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-14 px-4 bg-secondary border-b border-secondary justify-start items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-between items-center flex">
                        <div className="text-white text-xs font-medium">1</div>
                        <div className="opacity-50 text-white text-xs font-medium">2</div>
                        <div className="opacity-50 text-white text-xs font-medium">3</div>
                        <div className="opacity-50 text-white text-xs font-medium">4</div>
                        <div className="text-white text-xs font-medium">5</div>
                        <div className="opacity-50 text-white text-xs font-medium">6</div>
                        <div className="opacity-50 text-white text-xs font-medium">7</div>
                        <div className="opacity-50 text-white text-xs font-medium">8</div>
                        <div className="text-white text-xs font-medium">9</div>
                        <div className="opacity-50 text-white text-xs font-medium">10</div>
                        <div className="opacity-50 text-white text-xs font-medium">11</div>
                        <div className="opacity-50 text-white text-xs font-medium">12</div>
                        <div className="text-white text-xs font-medium">13</div>
                        <div className="opacity-50 text-white text-xs font-medium">14</div>
                        <div className="opacity-50 text-white text-xs font-medium">15</div>
                        <div className="opacity-50 text-white text-xs font-medium">16</div>
                        <div className="text-white text-xs font-medium">17</div>
                        <div className="opacity-50 text-white text-xs font-medium">18</div>
                        <div className="opacity-50 text-white text-xs font-medium">19</div>
                        <div className="opacity-50 text-white text-xs font-medium">20</div>
                        <div className="text-white text-xs font-medium">21</div>
                        <div className="opacity-50 text-white text-xs font-medium">22</div>
                        <div className="opacity-50 text-white text-xs font-medium">23</div>
                        <div className="opacity-50 text-white text-xs font-medium">24</div>
                        <div className="text-white text-xs font-medium">25</div>
                    </div>
                </div>
                <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                {/* {tracks.map((track, index) => (
                                <DraggableShape
                                key={index}
                                initialX={100} // Adjust initial X position as needed
                                initialY={track + 24} // Adjust initial Y position within the track
                                width={226} // Adjust width of the draggable shape
                                height={76} // Adjust height of the draggable shape
                                fillColor="" // Set fill color as needed
                                gridSize={12} // Set grid size for snapping if required
                                />
                            ))} */}
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center inline-flex">
                            <div className="justify-start items-center gap-1.5 flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1 h-8 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-10 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-11 bg-blue-500 rounded-3xl" />
                                    <div className="w-1.5 h-7 bg-blue-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
                                <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-11 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-8 bg-cyan-400 rounded-3xl" />
                                        <div className="w-1.5 h-4 bg-cyan-400 rounded-3xl" />
                                    </div>
                                    <div className="justify-start items-center gap-1.5 flex">
                                        <div className="w-1.5 h-7 bg-cyan-400 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-8 bg-amber-400 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-amber-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-20 px-2 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-teal-400 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch px-2 py-4 bg-secondary rounded-lg border border-secondary justify-start items-center flex">
                                <div className="justify-start items-center gap-1.5 flex">
                                    <div className="w-1.5 h-11 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-1.5 h-4 bg-fuchsia-500 rounded-3xl" />
                                    <div className="w-14 h-px bg-fuchsia-500 rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-auto px-2 flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch h-20 p-2 rounded-lg border border-zinc-700 justify-start items-start gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="justify-center items-center flex">
                                <div className="text-white text-opacity-50 text-xs font-normal">Insert or Drop Audio</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-20 p-2 rounded-lg border border-zinc-700 justify-start items-start gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="justify-center items-center flex">
                                <div className="text-white text-opacity-50 text-xs font-normal">Insert or Drop Audio</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-20 p-2 rounded-lg border border-zinc-700 justify-start items-start gap-2.5 inline-flex">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="justify-center items-center flex">
                                <div className="text-white text-opacity-50 text-xs font-normal">Insert or Drop Audio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainWorkspace;