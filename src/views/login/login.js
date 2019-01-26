import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from './components/LoginForm';
import { Spinner } from 'reactstrap';
import NavigationSistem from '../../components/nav-bar';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // loading:false
          
        }
    }
    hey(){
        this.setState({check_for_logined: true});
    }
    // clicking(e){
    //     this.setState({loading: true});
    //     setTimeout(()=>{
    //         this.setState({loading:false});
    //     },2000)
    // }
    render(){
        return(
            <div>
                <img className="img-bg" src={require('../About/img-for-about/IMG_195012.png')} />
                <div className="section">
                    {this.props.check === true? <div><NavigationSistem/></div>:null}
                    <div className="container section-header">
                        <h1>
                            LOGIN PAGE
                        </h1>
                    </div>
                    <div className="container">
                        <div className="section-login">
                            <LoginForm users={this.props.users} funct={this.props.funct} check={this.props.check_for_logined}/>
                            {this.props.name}
                        </div>
                    </div>
                    
                    
                    {/* {this.state.loading? "primary": <div>
                        <div className="container">
                            <div className="section-login">
                                <LoginForm users={this.props.users}/>
                                {this.props.name}
                            </div>
                        </div>
                    </div>}
                    <button onClick={(e)=>this.clicking(e)}>asdasdas</button> */}
                </div>
            </div>
        )
    }
}
export default Login;