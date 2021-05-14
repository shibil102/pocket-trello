import React from "react";
import Wrapper from "../UI/Wrapper";
import "./ActivityList.css";
import EmptyListAnimation from './EmptyListAnimation'
import ListItem from "./ListItem";

const ActivityList = (props) => {


  return (
    <div className="ActivityList">
      <div className="ActivityListTypos">
        <div className="ActivityListTitle">Activities</div>
        <div className="ActivityListCount">
          {props.length === 0 ? props.length + " Activity" : props.length + " Activities"}
        </div>
      </div>
      <Wrapper className="ActivityListWrapper">
        
        {props.length === 0 ? <EmptyListAnimation/> : props.items.map((item) => (
          <ListItem  onDelete={props.onDelete} activity={item.value} id={item.id} key={item.id} date={item.date} />
        ))}
      </Wrapper>
    </div>
  );
};

export default ActivityList;
