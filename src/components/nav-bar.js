import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";
class NavigationSistem extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    disable(index){
        var disable = document.getElementsByClassName('exam');
        
    }
    render(){
        return(
            <div className="navigetion-sistem">
                <Nav className="exam">
                    <NavItem>
                        <NavLink className="" ><Link onClick={(e)=>this.disable(0)} to="/">ABOUT</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="" ><Link onClick={(e)=>this.disable(1)}  to="/login">LOGIN</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="" ><Link onClick={(e)=>this.disable(2)}  to="/Profile">PROFILE</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="" ><Link onClick={(e)=>this.disable(3)}  to="/game">GAME</Link></NavLink>
                    </NavItem>
                </Nav>            
            </div>
        )
    }
}
export default NavigationSistem;