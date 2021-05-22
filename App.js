import React, { useState } from 'react';
import data from './data';
import Form from './Form';
import List from './List';
function App() {
  const [people , setPeople] = useState(data);
  const [age , setAge] = useState("");
  const [name , setName] = useState("");
  const delete1 = (id) => {
    const filter = people.filter(b => b.id !==id)
    setPeople(filter)}
  const showAll = () => {
    setPeople (data);
  }
  const newInfo =  (e) => {
    e.preventDefault();
    const newPerson = {
      name: name,
      age : age,
      id : name
    }
    console.log(newPerson);
    setPeople(people.concat(newPerson))

  }
  const nameChange = (e) => {
    setName(e.target.value);
  }

  const ageChange = (e) => {
    setAge(e.target.value);
  }
  return (
          <main>
            <Form age = {age} name = {name} nameChange = {nameChange} ageChange =  {ageChange} newInfo = {newInfo} />
          <section className='container'>
            <h2>{people.length} Birthdays left</h2>
            <List people = {people} delete1 = {delete1}/> 
            <button onClick = {()=> setPeople([])}>Delete all</button>
            <button onClick = {showAll}>showAll</button>
            </section>
          </main>
) 
}

export default App;
