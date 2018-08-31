import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div>
      <div class="page-header">
      
    </div>
      <div style={{backgroundColor:"navy",color:"white !important"}}>
      	<div className="row">
		<div className="col-md-12">
			<ul className="nav nav-pills">
				<li className="nav-item" style={{paddingLeft:"100px"}}>
					<Link className="nav-link" style={{color:"white"}} to="/" >Home</Link>
				</li>
				<li className="nav-item">
				<Link  className="nav-link" style={{color:"white"}} to="/profile">Profile</Link>
				</li>
				<li className="nav-item">
				<Link  className="nav-link " style={{color:"white"}} to="/message">Messages</Link>
				</li>
				<li className="nav-item dropdown ml-md-auto">
					 <a className="nav-link dropdown-toggle" style={{color:"white"}} href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
						 <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a>
						<div className="dropdown-divider">
						</div> <a className="dropdown-item" href="#">Separated link</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
        {/* <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/posts" activeStyle={this.active}>
          Posts
        </NavLink> */}
      </div>
      </div>
    );
  }
}

export default Header;




