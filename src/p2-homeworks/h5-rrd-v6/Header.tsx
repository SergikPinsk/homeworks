import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={'/pre-junior'}className={s.block}> PreJunior </NavLink>
            <NavLink to={'/preJun'} className={s.block}> Junior </NavLink>
            <NavLink to={'/error'} className={s.block}> Error </NavLink>
            <NavLink to={'/pre-junior'}className={s.menu}>Menu</NavLink>
        </div>
    )
}

export default Header
