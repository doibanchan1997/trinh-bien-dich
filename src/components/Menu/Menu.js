import React from 'react';
import {Route, Link} from 'react-router-dom'

const menus = [
  {
    name: "Home",
    to: '/quan-ly-bai-viet',
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
        <li className={`nav-item ${active}` } >
          <Link  
            className="nav-link" 
            to={to}>
            {label}
          </Link>
        </li>
      )
    }}
    />
  )
}
function Menu() {
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
    <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="/collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {showMenu(menus)}
              
              <MenuLink label= "" to="*"/>
            </ul>
          </div>
        </nav>
  );
}

export default Menu;
