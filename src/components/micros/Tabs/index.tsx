'use client'
import React, { useState } from "react";
import Tab from "./Tab";
import { TabsProps } from "./tabs.types";
import * as S from './tabs.styles';

export default function Tabs({ tabs, style }: TabsProps) {

	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<S.TabsContainer style={style}>
				{tabs.map((tab, index) => (
					<Tab
						key={tab.title + index}
						label={tab.title}
						index={index}
						selected={activeTab === index}
						mode="light"
						onClick={() => setActiveTab(index)}
					/>
				))}
			</S.TabsContainer>
			<S.ContentContainer>
				<S.TabContent>{tabs[activeTab].content}</S.TabContent>
			</S.ContentContainer>
		</>
	);
}
