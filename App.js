import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people , setPeople] = useState(data);
  const delete1 = (id) => {
    const filter = people.filter(b => b.id !==id)
    setPeople(filter)}
  const showAll = () => {
    setPeople (data);
  }
  return <>
          <main>
          <section className='container'>
            <h2>{people.length} Birthdays left</h2>
            <List people = {people} delete1 = {delete1}/> 
            <button onClick = {()=> setPeople([])}>Delete all</button>
            <button onClick = {showAll}>showAll</button>
            </section>
          </main>
  </>

  
}

export default App;
