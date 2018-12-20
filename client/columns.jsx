import React from 'react';

const Columns = ({ column, people, shiftLeft, shiftRight }) => {
  let leftButton;
  let rightButton;

  if (shiftLeft) {
    leftButton = <div onClick={(e) => {
      shiftLeft(column);
    }}>{"<"}</div>;
  }

  if (shiftRight) {
    rightButton = <div onClick={(e) => {
      shiftRight(column);
    }}>{">"}</div>
  }
  
  return (
    <div className="columns">
      <h1>Column</h1>
      {people.map((person) => {
        return <h2 key={person.id}>{person.person}</h2>
      })}
      {leftButton}
      {rightButton}
    </div>
    );
}

export default Columns;
