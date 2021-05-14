import React from 'react' 
import './ActivityItem.css'
import {BiX} from 'react-icons/bi'

const ActivityItem = props => {
   
    const month = props.date.toLocaleString('en-UK', {month: 'long'})
    const day = props.date.toLocaleString('en-UK', {day: '2-digit'})
    const year = props.date.getFullYear()

    const DeleteItem = () => {
        props.onDelete(props.id)
    }

    return (
    <div className="ActivityItemContainer">
        <div className="ActivityContent">
            <div className="ActivityTitleCount">
            <div className="ActivityItem">{props.activity}</div>
            <div className="ActivityDate">{`${month}-${day}-${year}`}</div>
            </div>
            <button onClick={DeleteItem} className='DeleteItem' >
            <BiX size="20" color="#ADB5BD" />
            </button>
        </div>
    </div>
    )
}

export default ActivityItem