import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import PreJunior from "./p2-homeworks/h5-rrd-v6/pages/PreJunior";
import Pages from "./p2-homeworks/h5-rrd-v6/Pages";

// igg2

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
