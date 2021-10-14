import { MouseEventHandler, ReactNode } from "react";

export type ListItemProps = {
    id: string,
    component?: ReactNode,
    active?: boolean,
    title?: string,
    description?: string,
    leftChildren?: ReactNode,
    rightChildren?: ReactNode,
    onClick?: ( item:ListItemProps ) => void
}

export type ListViewProps = {
    list: ListItemProps[],
    selectable?: boolean,
    onItemClick?: ( item:ListItemProps ) => void
}