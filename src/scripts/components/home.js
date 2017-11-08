import React from 'react'
import {withRouter} from "react-router-dom";


class Home extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        return (
            <div>
                Home, sweet home!
                <button onClick={()=>this.props.history.push("/404")}>GOTO 404</button>
            </div>)

    }
}

export default withRouter(Home);