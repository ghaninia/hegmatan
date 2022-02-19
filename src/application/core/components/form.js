import React from "react";

const Form = React.forwardRef((props , ref) => {

    const {children , ...otherProps } = props ;

    return (
        <form {...otherProps} ref={ref}>{children}</form>
    );


})

export default Form ;
