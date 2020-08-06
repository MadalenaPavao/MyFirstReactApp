import React, { Fragment } from 'react';

const CustomButton = ({buttonName = "Hide description", onClickHandler, children})=>{
    console.log(onClickHandler);
    // console.log(children, "<=== children")
    return (
        <Fragment>
            <button style={{marginTop: "20px"}} className="btn btn-primary" onClick={onClickHandler}>{ buttonName }</button>
            {/* <div>{children}</div> */}
        </Fragment>
    )
}

export default CustomButton;