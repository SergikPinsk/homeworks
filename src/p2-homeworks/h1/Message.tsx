import React from 'react'
import st from './Message.module.css'


type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div className={st.message}>
            <div className={st.avatarcss}>
                <img src={props.avatar} />
            </div>
            <div className={st.angle}/>
            <div className={st.blockMessage}>
                    <h2 className={st.name}> {props.name} </h2>
                    <div className={st.hi}><p>{props.message}</p></div>
                   <div className={st.time}> {props.time} </div>
                </div>
        </div>
    )
}

export default Message
