import { MouseEventHandler } from "react";

export type CardViewProps = {
    title: string,
    desc?: string,
    img?: string,
    rounded?: boolean,
    height?: number,
    onClick?: MouseEventHandler<HTMLElement>
}