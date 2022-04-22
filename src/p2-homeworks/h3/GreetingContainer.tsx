import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // return meaning !== ' ' && '' ? setName(meaning) : setError(meaning);
        let meaning = event.currentTarget.value.trim();
        if (meaning) {
            setName(meaning)
            setError('')
        } else {
            setName('')
            setError('Бро так нельзя!')
        }
    }

    const addUser = () => {
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setName('')

        }



    const pressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' && name !== '' ? addUser() : false;
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressEnter={pressEnter}
        />
    )
}

export default GreetingContainer
