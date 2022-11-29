// import "./App.scss";
import "./App.css";
import { useState } from "react";
import TextArea from "./components/Text/TextArea";
import BoxArea from "./components/Box/BoxArea";
function App() {
  const [person,setPerson] = useState({firstname:"",lastname:"",email:"",password:""});
  const [error, setError] = useState({firstname:true,lastname:true,email:true,password:true})

  const handleButton = (e) => {
    e.preventDefault()
    setError(person)
    if(Object.values(person).every(value => value)){
      // setNewArr(prevState => [...prevState,{id:Math.random(),...person}])
      console.log(handleButton);
      setPerson({firstname:"",lastname:"",email:"",password:""})
    }
  }
  const handleSetPerson = (inputValue) => {
    setPerson(prevPerson => ({...prevPerson,...inputValue}))
  }

  return (
    <div className="App">
      <TextArea/>
      <BoxArea person={person} setPerson={setPerson} handleButton={handleButton} handleSetPerson={handleSetPerson} error={error}  />
    </div>
  );
}

export default App;
