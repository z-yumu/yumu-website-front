import React, { FC } from 'react'
// import StyledDemo from './components/StyledDemo'
// import { Button } from 'antd'
import './App.css'

import { Outlet } from 'react-router-dom'
import LayoutCom from './components/layout/LayoutCom'

const App: FC = () => {
    return (
        <div className="App">
            <LayoutCom />
            <Outlet />
        </div>
    )
}

export default App
