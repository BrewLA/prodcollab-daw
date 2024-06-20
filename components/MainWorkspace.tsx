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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <div className="grow shrink basis-0 h-20 px-2.5 py-4 bg-secondary rounded-lg border border-secondary justify-center items-center gap-1.5 flex">
                            <svg width="100%" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" fill="#181819" />
                                <rect x="0.507869" y="0.507869" width="254.984" height="75.7604" rx="7.49213" />
                                <rect x="8" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="200" y="17.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="32" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <rect x="176" y="29.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                <g clip-path="url(#clip0_827_51)">
                                    <path d="M104 44.3881C104 42.7312 105.343 41.3881 107 41.3881L128 41.3881V47.3881H107C105.343 47.3881 104 46.0449 104 44.3881V44.3881Z" fill="#2C80FF" />
                                    <rect width="24" height="6" transform="translate(128 41.3881)" fill="#2C80FF" />
                                    <path d="M152 41.3881H173C174.657 41.3881 176 42.7312 176 44.3881V44.3881C176 46.0449 174.657 47.3881 173 47.3881H152V41.3881Z" fill="#2C80FF" />
                                    <rect x="224" y="41.3881" width="24" height="6" rx="3" fill="#2C80FF" />
                                </g>
                                <path d="M56 56.3881C56 54.7312 57.3431 53.3881 59 53.3881L80 53.3881V59.3881H59C57.3431 59.3881 56 58.0449 56 56.3881V56.3881Z" fill="#2C80FF" />
                                <rect width="24" height="6" transform="translate(80 53.3881)" fill="#2C80FF" />
                                <path d="M104 53.3881H125C126.657 53.3881 128 54.7312 128 56.3881V56.3881C128 58.0449 126.657 59.3881 125 59.3881H104V53.3881Z" fill="#2C80FF" />
                                <defs>
                                    <clipPath id="clip0_827_51">
                                        <rect width="240" height="6" fill="white" transform="translate(8 41.3881)" />
                                    </clipPath>
                                </defs>
                            </svg>
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