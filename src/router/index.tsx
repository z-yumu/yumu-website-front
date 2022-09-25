import React, { FC, ReactElement } from 'react'
import App from '../App'
import Login from '../views/Login'
import JokeList from '../views/JokeList'
import Todo from '../views/Todo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import JokeEdit from '../views/JokeEdit'

const RouterCom: FC = (): ReactElement => (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/joke-list" element={<JokeList />}></Route>
                <Route path="/joke-edit" element={<JokeEdit />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </Router>
)

export default RouterCom
