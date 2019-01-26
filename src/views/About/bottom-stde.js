import React from 'react';
import {Link} from "react-router-dom";
class BottomSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="two-side-blocks">
                <div className="block-of-about">
                    <p>
                        ????
                    </p>
                </div>
                <Link className="link-route" to='/game'>
                    <div className="block-of-about">
                        <p>
                            GAME
                        </p>
                    </div>
                </Link>
                <div className="block-of-about">
                    <p>
                        ????
                    </p>
                </div>
            </div>
        )
    }
}
export default BottomSide;