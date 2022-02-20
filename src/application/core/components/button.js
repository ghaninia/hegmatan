import React from "react" ;
import Spinner from "./spinner";

const Button = React.forwardRef((props , ref) => {

    const {children , isLoading , ...otherProps} = props ;

    const label = isLoading ? <Spinner/> : children ;

    const disabled = isLoading ? true : false ;

    return (
        <button disabled={disabled} className="btn primary" {...otherProps}>
            {label}
        </button>
    )

})


export default Button ;