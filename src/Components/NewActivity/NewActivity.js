import React from 'react' 
import Wrapper from '../UI/Wrapper'
import NewActivityForm from './NewActivityForm'
import './NewActivity.css'

const NewActivity = props => {

const onSaveExpenseData = (enteredData) => {
    const newActivity = {
        ...enteredData,
        id: Math.random().toString()
    }
   
props.onAddNewData(newActivity)
}

    return (
        <div className='NewActivity' >
         <div className='quote' >Add new activity</div>
         <Wrapper>
         <NewActivityForm onSaveExpenseData={onSaveExpenseData} />
        </Wrapper>
        </div>
        
    )
}

export default NewActivity
