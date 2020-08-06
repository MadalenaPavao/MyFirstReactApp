import React, { Fragment } from 'react';

//const CustomButton = ({buttonName = "Show description", children})=>{
const CustomButton = ({buttonName = "Show description", children})=>{
    console.log(children, "<=== children")
    return (
        <Fragment>
            <button className="btn btn-success">{ buttonName }</button>
            <div>{children}</div>

        </Fragment>
    )
}

export default CustomButton;