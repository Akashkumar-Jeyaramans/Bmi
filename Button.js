import React, { Component } from "react";
import Input from "./Input1";

class Button extends Component{
    constructor(props){
        super(props);
         
    }

 

    render(){
        return(
            <>
            <div className="row">
                <div className="col-3">
            <label>Height</label><Input ></Input><p>feet</p>
            </div>
            <div className="col-3">
            <Input ></Input><p>inches</p><br></br>
            </div>
            </div>
            <div className="row">
            <label>Weight</label>
            <Input ></Input>
            </div>
            </>
        );
    }
}

export default Button;