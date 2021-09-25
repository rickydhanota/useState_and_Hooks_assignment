import React, { useState } from "react";

const Birthdays = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [stateAge, setStateAge] = useState(age);
  //const [stateAge, setStateAge] = useState(props.age); Looks like you can say useState(props.age) and it still works

  return (
    <div>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {stateAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => setStateAge(stateAge + 1)}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>

    // <div>
    //     <h2>
    //     {props.lastName}, {props.firstName}
    //     </h2>
    //     <p>Age: {stateAge}</p>
    //     <p>Hair Color: {props.hairColor}</p>
    //     <button onClick={() => setStateAge(stateAge + 1)}>
    //     Birthday Button for {props.firstName} {props.lastName}
    //     </button>
    // </div>
  );
};

export default Birthdays;