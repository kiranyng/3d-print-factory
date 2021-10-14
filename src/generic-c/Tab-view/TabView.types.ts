import { MouseEventHandler, ReactNode } from "react"

export type TabProps = {
    key: string,
    title: string,
    component: ReactNode,
    showCloseIcon?: boolean,
    onActive?: (ev: MouseEvent) => void,
    onClose?: (ev: MouseEvent) => void,
}

export type TabViewProps = {
    tabs: TabProps[],
    showCloseIcons?: boolean,
    preLoad?: false,
    onItemClose?: (key: string, ev:MouseEvent) => void
}