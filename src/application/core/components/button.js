import React from "react" ;

const Button = React.forwardRef((props , ref) => {
    
    const {children , otherProps} = props ;

    return (
        <button className="btn primary" {...otherProps}>
            {children}
        </button>
    )

})


export default Button ;