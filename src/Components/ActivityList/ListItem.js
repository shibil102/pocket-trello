import React from 'react' 
import './ListItem.css'
import ActivityItem from './ActivityItem'

const ListItem = props => {
    return (
        <ActivityItem 
        date={props.date}
        activity={props.activity}
        id={props.id}
        onDelete={props.onDelete} 
        />
    )
}

export default ListItem
