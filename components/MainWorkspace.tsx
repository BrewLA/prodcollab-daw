import React, { useRef, useState, useEffect } from 'react';
import AudioWaveform from './AudioWaveform';
import Timestamps from './Timestamps';

const MainWorkspace = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-x-auto">
      <div className="w-full h-full flex-col justify-start items-start inline-flex">
        <Timestamps containerWidth={containerWidth} duration={duration} />

        <div className="w-full p-2 gap-2 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <AudioWaveform setDuration={setDuration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWorkspace;
