import { MouseEventHandler, useState } from "react";
import { Button } from "../Button/Button";
import { StyledTabsList, StyledTabUI, StyledTabView } from "./TabView.styles";
import { TabProps, TabViewProps } from "./TabView.types";

export const TabView: React.FC<TabViewProps> = ( props: TabViewProps ) => {
    const [activeTabIndex, activateTabAtIndex] = useState(0);

    const getTabClickHandler = ( tab: TabProps, index: number ):MouseEventHandler => {
        return () => {
            activateTabAtIndex( index );
        }
    }

    return <StyledTabView>
        <StyledTabsList>
            {
                props.tabs.map( (tab: TabProps, index: number) => {
                    if( index === activeTabIndex ){
                        return <Button key={ tab.key } label={ tab.title } variant="filled" onClick={ getTabClickHandler( tab, index ) } />/*<StyledTab active key={ tab.key }>{ tab.title }</StyledTab>*/
                    }

                    return <Button key={ tab.key } label={ tab.title } variant="outline" onClick={ getTabClickHandler( tab, index ) } />/* <StyledTab key={ tab.key }>{ tab.title }</StyledTab> */
                })
            }
        </StyledTabsList>
        <StyledTabUI>
            {
                props.tabs && props.tabs[activeTabIndex] ? props.tabs[activeTabIndex].component : 'Nothing to display!'
            }
        </StyledTabUI>
    </StyledTabView>
}