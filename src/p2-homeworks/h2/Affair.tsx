import React from 'react'
import {AffairType} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)


    }

    return (
        <div>
            {props.affair._id}--
            {props.affair.name}--
            {props.affair.priority}--
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
