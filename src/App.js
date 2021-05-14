import React, {useState} from 'react'
import './App.css';
import NewActivity from './Components/NewActivity/NewActivity'
import ActivityList from './Components/ActivityList/ActivityList'




function App() {

const [data, setData] = useState('')

const length = data.length 
console.log(length);

const onAddNewData = (Activity) => {
  setData((prevData) => {
    return [Activity, ...prevData]
  })
}

const onDeleteHandler = (itemId) => {
setData(prevData => {
return prevData.filter((item )=> item.id !== itemId)
})
}

  return (
    <div className="App">
     <div className="title">Pocket Trello</div>
     <NewActivity onAddNewData={onAddNewData} />
     <ActivityList length={length} onDelete={onDeleteHandler} items={data}  />
     <p>This app developed by kivnto.in</p>
    </div>
  );
}

export default App;
