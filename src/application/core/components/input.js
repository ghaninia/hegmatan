import React from "react" ;

const Input = React.forwardRef((props , ref) => {
    return (
        <input className="form-control" {...props} ref={ref} />
    )
})

export default Input ;