import React, {useState} from "react";

const Textarea = React.forwardRef((props , ref) => {

    const {children , ...otherProps } = props ;

    const [filled , setFilled ] = useState(false) ;

    const changeHandle = (e) => {
        let value = e.target.value ;
        value = Boolean(value) ;
        setFilled(value) ;
    }

    let className = "form-control " ;
    className += filled ? "filled" : "" ;

    return (
        <>
            <textarea className={className} {...otherProps} ref={ref} onChange={ e => changeHandle(e) }>{children}</textarea>
        </>
    );

});

export default Textarea ;