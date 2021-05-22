import React from 'react';

const List = ({people , delete1}) => {
  return (
    <>
      {people.map(b => {
              const { id, name, age, image } = b
              
              return (
                <article key= {id} className= 'person'>
                  <img src = {image}/> 
                  <div>
                  <h4>{name}</h4>
                  <p>{age}</p>
                  </div>
                  <button onClick = {() => delete1(id)}>Delete</button>
                  
                </article>
              )
} 
)}
    </>
  );
};

export default List;
