import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
        <Link to='/home'>Home</Link>
      <div class="dropdown">
      <button class="dropbtn">Dashboards</button>
      <div class="dropdown-content">
        <Link to='https://app.powerbi.com/view?r=eyJrIjoiZjY0ODlhYzYtOTgxYS00MGQ5LThkY2ItYTM2MmU1ZjZiYTdhIiwidCI6IjUzOTQ5NTkzLTBlOTQtNDAyZS05NmRmLTkwYTMyNjY0NWUwYiJ9'>GSWS</Link>
        <Link to='/resurvey'>Re-survey</Link>
        <Link to='/medicaldepartment'>Medical Department</Link>
      </div>
    </div>
      <Link to='/contact'>Contact</Link>
      <Link to='/login' className="Login">Login</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar