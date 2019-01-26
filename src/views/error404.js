import React from 'react';

class Error404 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ERROR">
                <img src={require('./About/img-for-about/magumin.png')} className="img-error"/>
                ERROR 404<br/>
                page not found!
            </div>
        )
    }
}
export default Error404;