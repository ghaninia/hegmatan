import React from "react" ;
import Spinner from "./spinner";

const Button = React.forwardRef((props , ref) => {

    const {children , isProgress , ...otherProps} = props ;

    const label = isProgress ? <Spinner/> : children ;

    return (
        <button className="btn primary" {...otherProps}>
            {label}
        </button>
    )

})


export default Button ;