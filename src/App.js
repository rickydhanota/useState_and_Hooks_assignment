import './App.css';
import Birthdays from './components/Birthdays';
import Birthdays2 from './components/Birthdays2';
import Birthdays3 from './components/Birthdays3';


const peopleArr = [
  {
    firstName: "Joe",
    lastName: "Smith",
    age: 28,
    hairColor: "blonde",
  },
  {
    firstName: "Matilda",
    lastName: "Jones",
    age: 33,
    hairColor: "brown",
  },
  {
    firstName: "Jane",
    lastName: "Johnson",
    age: 34,
    hairColor: "blonde",
  },
  {
    firstName: "Hal",
    lastName: "Moore",
    age: 90,
    hairColor: "grey",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((birthdaysObj, index) => (
        <Birthdays
          key={index}
          firstName={birthdaysObj.firstName}
          lastName={birthdaysObj.lastName}
          age={birthdaysObj.age}
          hairColor={birthdaysObj.hairColor}
        />
      ))}

      {peopleArr.map((birthdays2Obj,index) => (
        <Birthdays2 
          key={index}
          firstName={birthdays2Obj.firstName, "birthday2"}
          lastName={birthdays2Obj.lastName}
          age={birthdays2Obj.age}
          hairColor={birthdays2Obj.hairColor}
        />
      ))}

      {peopleArr.map((birthdays3Obj,index) => (
        <Birthdays3 
          key={index}
          firstName={birthdays3Obj.firstName, "birthday3"}
          lastName={birthdays3Obj.lastName}
          age={birthdays3Obj.age}
          hairColor={birthdays3Obj.hairColor}
        />
      ))}

      {/* <PersonCard
        firstName={peopleArr[0].firstName}
        lastName={peopleArr[0].lastName}
        age={peopleArr[0].age}
        hairColor={peopleArr[0].hairColor}
      />
      <PersonCard
        firstName={peopleArr[1].firstName}
        lastName={peopleArr[1].lastName}
        age={peopleArr[1].age}
        hairColor={peopleArr[1].hairColor}
      />
      <PersonCard
        firstName={peopleArr[2].firstName}
        lastName={peopleArr[2].lastName}
        age={peopleArr[2].age}
        hairColor={peopleArr[2].hairColor}
      />
      <PersonCard
        firstName={peopleArr[3].firstName}
        lastName={peopleArr[3].lastName}
        age={peopleArr[3].age}
        hairColor={peopleArr[3].hairColor}
      /> */}

      {/* ^^^This is how we would do it above right here, but this doesnt look professional so dont do it this way */}
    </div>
  );
}

export default App;
