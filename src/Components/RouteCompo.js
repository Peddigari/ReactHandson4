import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import LinkCompo from './LinkCompo'
import Student from './Student'

function RouteCompo() {
    return (
        <div>
            
            <BrowserRouter>
            <LinkCompo/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default RouteCompo
