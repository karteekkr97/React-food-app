
import React from "react";
import UserClass from "./UserClass";


class About extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("parent contsructor")
      
    }

 componentDidMount()
    {
        console.log("Parent didUpdate")
    }

    componentDidUpdate()
    {
        console.log("Parent didUpdate")
    }

    componentWillUnmount()
    {
        console.log("Parent willunmount")
    }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About us</h1>
                <h2>This is food delivery app</h2>
                <h3>name:{"bangalore"}</h3>
                <h4>location:{"hello"}</h4>
            </div>
        )
    }
}

export default About;