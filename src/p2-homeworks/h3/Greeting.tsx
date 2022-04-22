import React, {ChangeEvent ,KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressEnter: (event: KeyboardEvent<HTMLInputElement>)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorType  : '' ;



    return (
        <div>
            <input
                value={name}
                onKeyPress={pressEnter}
                onChange={setNameCallback}
                className={inputClass}
                onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting


// value={name}
