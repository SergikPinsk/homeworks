import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import Message from './Message'



function HW1() {
    return (
        <div>
            <h3>HomeWorks number 1</h3>
            <hr/>
            <Message
                avatar={'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'}
                name={'Sergo'}
                message={'Hallo Bro'}
                time='22:00'
            />
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/* <hr /> */}
        </div>
    )
}

export default HW1
