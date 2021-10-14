import { useState } from "react";
import { StyledListItem, StyledListItemContent, StyledListView } from "./ListView.styles"
import { ListItemProps, ListViewProps } from "./ListView.types"

const ListItem: React.FC<ListItemProps> = (props) => {
    const clickHandler = () => {
        console.log('item clicked:', props);
        if( props.onClick ){
            props.onClick( props );
        }
    }

    return <StyledListItem rounded justifyContent="stretch" active={ props.active ? true : false }  onClick={ clickHandler }>
        { props.leftChildren ? props.leftChildren : '' }
        <StyledListItemContent alignItems="stretch">
        { 
            props.component ? props.component : <>
                <div> { props.title } </div>
                { props.description ? <div>props.description</div> : '' }
            </>
        }
        </StyledListItemContent>

        { props.rightChildren ? props.rightChildren : '' }
    </StyledListItem>
}

export const ListView: React.FC<ListViewProps> = (props) => {
    const [activeItem, setActiveItem] = useState('');

    const onItemClickHandler = ( item: ListItemProps ) => {
        if( props.selectable ) {
            setActiveItem( item.id );

            if( props.onItemClick ) {
                props.onItemClick( item );
            }
        }
    }

    return <StyledListView>
        { 
            props.list.map( (item, index ) => {
                return <ListItem key={ item.id } {...item} onClick={ onItemClickHandler } active={ activeItem === item.id }/>
            } )
        }
    </StyledListView>
}