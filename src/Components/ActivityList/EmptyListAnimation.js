import React from 'react' 
import './EmptyListAnimation.css'

const EmptyListAnimation = () => {
    return (
<div className="EmptyListAnimation">
    <div className="clock"></div>
    <div className="EmptyText">
        Please add something <br />
        Your clock is ticking...
    </div>
</div>
    )
}

export default EmptyListAnimation
