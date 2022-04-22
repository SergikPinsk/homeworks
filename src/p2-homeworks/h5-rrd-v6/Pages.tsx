import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import PreJunior from '../h5/pages/PreJunior'
import Error404 from './pages/Error404'



export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Pages() {
    return (
        <div>

            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

            {/*    /!*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*!/*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}></Route>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={'/error/*'} element={<Error404/>}></Route>

            </Routes>

        </div>
    )
}

export default Pages
