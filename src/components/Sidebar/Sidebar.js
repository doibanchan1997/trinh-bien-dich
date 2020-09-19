import React from 'react';
import {Route, Link} from 'react-router-dom'

const menus = [
  {
    name: "Home",
    to: '/quan-ly-bai-viet/',
    exact: true
  },
  {
    name: "About",
    to: '/quan-ly-bai-viet/about',
    exact: false
  },
  {
    name: "Contact",
    to: '/quan-ly-bai-viet/contact',
    exact: false
  },
  {
    name: "Vlog",
    to: '/quan-ly-bai-viet/vlog',
    exact: false
  },
  {
    name: "Login",
    to: '/quan-ly-bai-viet/login',
    exact: false
  }
]
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return(
        
      <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
        var active = match ? 'active abd': '';
        return (
            <a className={`nav-item ${active}` } >
            <Link  
              className="collapse-item" 
              to={to}>
              {label}
            </Link>
            </a>
        )
      }}
      />
    )
  }
const Sidebar = () => {
    let showMenu = ()=>{
        let result = null
        if(menus.length > 0)
          result = menus.map((menu, index)=> {
            return (
              <MenuLink 
              key= {index}
              label= {menu.name} 
              to={menu.to}  
              activeOnlyWhenExact= {menu.exact} />
            )
          })
        return result
      }
    return (
        <div>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
            Interface
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog" />
                <span> Quan Ly Bai Viet </span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                
                {showMenu(menus)}
                
                </div>
            </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            {/* Nav Item - Tables */}
            <li className="nav-item">
            <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table" />
                <span>Tables</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
        {/* End of Sidebar */}
        </div>       
    )
}

export default Sidebar;