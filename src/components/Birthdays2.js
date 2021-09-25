import React, { useState } from 'react';

const Birthdays2 = (props) => {

    const [stateAge, setStateAge] = useState(props.age); 
  //Looks like you can say useState(props.age) and it still works

    const handleClick = () => {
        setStateAge(stateAge + 1);
    }

    return (
        <div>
            <h2>
            {props.lastName}, {props.firstName}
            </h2>

            <p>Age: {stateAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClick}>
            Birthday Button for {props.firstName} {props.lastName}
            </button>

        </div>
    );
};


export default Birthdays2;