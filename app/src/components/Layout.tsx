import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Layout:React.FC = () => {
  return (
    <div>
        <p>This is our layout</p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout