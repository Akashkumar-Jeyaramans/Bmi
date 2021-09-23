import React, { Component } from "react";
import Input from "./Input1";

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            weight:0,height:0,bmi:0
            } 
    }

 

    render(){
        return(
            <>
         <div className="container">
            <div className="row">
                <div className="col-3">
                     <label>Height</label>
                </div>
            </div>

                <div className="row">
                    <div className="col-2">
                         <Input ></Input>
                    </div>

                    <div className="col-3">
                        <label>Feet</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Input ></Input>
                    </div>

                    <div className="col-3">
                        <p>inches</p><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label>Weight</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Input ></Input>
                    </div>

                    <div className="col-3">
                        <p>Kilograms</p><br></br>
                    </div>
                </div>
                
                <div>
                    <button>submit</button>
                </div>
                 
            
        </div>
            </>
        );
    }
}

export default Button;