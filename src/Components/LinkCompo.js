
import React from 'react'
import { Link } from 'react-router-dom'

function LinkCompo() {
    return (
        <div className="header">
            <Link className="links" to='/'>Home</Link>
            <Link className="links" to='/student'>Student</Link>
            <Link className="links" to='/contact'>Contact</Link>
        </div>
    )
}

export default LinkCompo
