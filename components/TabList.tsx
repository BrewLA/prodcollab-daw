import { useState } from 'react';

interface TabListProps {
    tabs: string[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-1 rounded-md border border-secondary justify-start items-center gap-1 flex">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-1 py-0.5 rounded justify-center items-center flex hover:bg-tertiary ${
                        activeTab === tab ? 'bg-tertiary' : 'opacity-50'
                    }`}
                >
                    <div className="text-white text-xs">{tab}</div>
                </div>
            ))}
        </div>
    );
};

export default TabList;
