import React, { useEffect, useState } from 'react';

interface TimestampsProps {
    containerWidth: number;
    duration: number;
}

const Timestamps: React.FC<TimestampsProps> = ({ containerWidth, duration }) => {
    const minCount = 120;
    const [timestamps, setTimestamps] = useState<number[]>([]);

    useEffect(() => {
        const maxCount = Math.max(minCount, Math.ceil(duration));
        const timestampCount = Math.min(maxCount, Math.floor(containerWidth));

        console.log('containerWidth:', containerWidth);
        console.log('timestampCount:', timestampCount);

        const newTimestamps = Array.from({ length: timestampCount }, (_, i) => i + 1);
        setTimestamps(newTimestamps);
    }, [containerWidth, duration]);

    return (
        <div className="w-auto h-14 px-4 bg-secondary border-b border-secondary justify-start items-center gap-2.5 inline-flex">
            <div className="w-full h-6 justify-between items-center flex">
                {timestamps.map((number) => (
                    <div
                        key={number}
                        className={`text-xs font-medium pr-4 select-none ${number % 4 === 1 ? 'text-white' : 'opacity-50 text-white'}`}
                    >
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timestamps;
