import React, { FC,ReactElement } from 'react'
import App from '../App'
import Login from '../views/Login'
import JokeList from '../views/JokeList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const RouterCom:FC = ():ReactElement => (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/jokelist" element={<JokeList />}></Route>
            </Route> 
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </Router>
)

export default RouterCom
