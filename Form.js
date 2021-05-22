import React from 'react'

const Form = ({name , age , nameChange , ageChange, newInfo}) => {
    return (
        <div>
            <form onSubmit = {newInfo}>
                Input Name <input  value = {name} onChange= {nameChange} />

                Input Age <input value = {age} onChange = {ageChange} />
                <button type = 'submit'>add new person</button>
            </form>
        </div>
    )
}

export default Form


