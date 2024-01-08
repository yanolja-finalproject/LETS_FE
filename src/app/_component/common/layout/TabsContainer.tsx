"use client";

import { useState } from "react";
import Tabs from "@/app/_component/common/atom/Tabs";
import TabButtons from "@/app/_component/common/atom/TabButtons";

interface Props {
  tabs: {
    name: string;
    content: JSX.Element;
  }[];
  tabButtonStyle?: {
    defaultClass?: string;
    selectedClass?: string;
  };
}

const TabsContainer = ({ tabs, tabButtonStyle }: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);

  const handleSelect = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <article>
      <Tabs
        buttons={tabs.map((tab) => (
          <TabButtons
            isSelected={selectedTab === tab.name}
            key={tab.name}
            onClick={() => handleSelect(tab.name)}
            tabName={tab.name}
            defaultClass={tabButtonStyle?.defaultClass}
            selectedClass={tabButtonStyle?.selectedClass}
          />
        ))}
      >
        {tabs.find((tab) => tab.name === selectedTab)?.content}
      </Tabs>
    </article>
  );
};

export default TabsContainer;
