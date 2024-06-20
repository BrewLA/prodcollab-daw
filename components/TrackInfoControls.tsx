// TrackInfoControls.tsx
import React, { useState } from 'react';

interface TrackInfoControlsProps {
    groupName: string; // Unique name for radio group
    options: string[]; // Array of options for radio buttons
    onChange: (value: string) => void;
}

const TrackInfoControls: React.FC<TrackInfoControlsProps> = ({ groupName, options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string>(options[0]); // Initial selected value

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedValue(value);
        onChange(value);
    };

    return (

        // Radio Group
        <div className="justify-start items-start gap-1.5 inline-flex">
            {options.map((option) => (
                <React.Fragment key={option}>
                    <input
                        type="radio"
                        id={`${groupName}-${option}`}
                        name={groupName}
                        value={option}
                        className="sr-only"
                        onChange={handleRadioChange}
                        checked={selectedValue === option}
                    />
                    <label
                        htmlFor={`${groupName}-${option}`}
                        className={`px-1 py-0.5 rounded border border-neutral-200 justify-start items-start gap-2.5 flex cursor-pointer ${selectedValue === option ? 'opacity-100' : 'opacity-15'
                            }`}
                    >
                        <div className="text-neutral-200 text-xs">{option}</div>
                    </label>
                </React.Fragment>
            ))}
        </div>
    );
};

export default TrackInfoControls;
