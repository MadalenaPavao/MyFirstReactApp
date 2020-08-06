import React, { Fragment } from 'react';

const CustomButton = ({buttonName = "Hide description", children})=>{
    console.log(children, "<=== children")
    return (
        <Fragment>
            <button className="btn btn-primary">{ buttonName }</button>
            <div>{children}</div>
        </Fragment>
    )
}

export default CustomButton;