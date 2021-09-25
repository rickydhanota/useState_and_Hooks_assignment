import React, { useState } from 'react';

const Birthdays3 = props => {

    const [stateAge, setStateAge] = useState(props.age); 

    return (
        <div>
            <h2>
            {props.lastName}, {props.firstName}
            </h2>

            <p>Age: {stateAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
            Birthday Button for {props.firstName} {props.lastName}
            </button>
        </div>
    );
};

Birthdays3.propTypes = {
    
};

export default Birthdays3;