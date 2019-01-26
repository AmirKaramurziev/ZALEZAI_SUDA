import React from 'react';
import BottomSide from './bottom-stde';
import EndingAbout from './ending';
import {Link} from "react-router-dom";
import NavigationSistem from '../../components/nav-bar';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    hey(){
        this.setState({check_for_logined: true});
    }
    render(){
        return(
            <div>
                <img className="img-bg" src={require('./img-for-about/IMG_195012.png')} />
                <div className="section">
                    {this.props.check === true? <div><NavigationSistem/></div>:null}
                    <div className="container section-header">
                        <h1>
                            ABOUT THIS SITE
                        </h1>
                    </div>
                    <div className="container section-main">
                        <div className="main-blocks">
                            <Link className="link-route" to='/login'>
                                <div Link className="block-of-about">
                                    <p>
                                        LOGIN
                                    </p>
                                </div>
                            </Link>
                            <div className="block-of-about">
                                <p>
                                    ????
                                </p>
                            </div>
                            <Link className="link-route" to='/Profile'>
                                <div className="block-of-about">
                                    <p>
                                        PROFILE
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <BottomSide/>
                    </div>
                    <EndingAbout/>
                </div>
            </div>
        )
    }
}
export default About;