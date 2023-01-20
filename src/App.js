import { useState } from "react";
import { useEffect } from "react";
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Last Name: {props.lastname}</h1>
      <h1>Age: {props.age}</h1>
    </>
  );
}

const App = () => {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    setCounter(100);
  },[]);
  return (

    <>
      <Person name={"Ravi"} lastname={"Kishore"} age={"21"}/>
      <Person name={"Nihu"} lastname={"Chalu"} age={"21"}/>
      <button onClick={() => setCounter((count) => count-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((count) => count+1)}>+</button>
    </>
    
  );
}

export default App;
