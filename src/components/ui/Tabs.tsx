import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { label: string; value: string; disabled?: boolean }[];
}

const Tabs = ({ activeTab, onTabChange, tabs }: TabsProps) => {
  return (
    <div className="flex justify-start border-b mb-4">
      {tabs.map(({ label, value, disabled }) => (
        <button
          key={value}
          onClick={() => onTabChange(value)}
          disabled={disabled}
          className={`relative px-6 py-2 text-lg font-medium transition ${activeTab === value
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
