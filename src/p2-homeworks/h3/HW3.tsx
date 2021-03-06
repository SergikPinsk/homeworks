import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'


// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to \
    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name}
        console.log(newUser)
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
