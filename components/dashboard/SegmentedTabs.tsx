"use client";

import { useState } from "react";
import clsx from "clsx";

interface Tab {
  label: string;
  value: string;
}

interface SegmentedTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SegmentedTabs = ({
  tabs,
  defaultValue,
  onChange,
}: SegmentedTabsProps) => {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value);

  const handleSelect = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#1FE9F7]/20 bg-[rgba(7,18,19,0.75)] p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => handleSelect(tab.value)}
          className={clsx(
            "rounded-full px-5 py-2 text-sm font-medium text-[#7EA6A9] transition-all duration-150 hover:text-[#C9F6F8]",
            active === tab.value &&
              "bg-[linear-gradient(90deg,#5EFBFF_0%,#1FE9F7_100%)] text-[#061015] shadow-[0_12px_24px_rgba(31,233,247,0.4),inset_0_0_12px_rgba(255,255,255,0.18)] -translate-y-px"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedTabs;
