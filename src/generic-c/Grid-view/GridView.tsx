import React, { Component, ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

import './GridView.css'

type GridViewProps = {
    children: ReactNode[],
    totalRecords?: number,
    pagination?: {
        implicit?: boolean,
        itemsPerPage: number,
        position: 'top' | 'bottom' | 'hide',
        onPgItemClick: ( id: string, ev: MouseEvent ) => void
    } | false,
    onItemClick?: ( id: string, ev: MouseEvent ) => void
}

export const GridView = ( props: GridViewProps) => {
    return <div className="Grid-view" >
        { props.children }
    </div>
}