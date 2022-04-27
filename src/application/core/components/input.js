import React, {useState} from "react" ;

const Input = React.forwardRef((props , ref) => {

    var { type , ...otherProps } = props ;

    const [show , changeShow] = useState(false) ;

    let showEyeComponent ;

    if(type === "password") {
        const toggleShow = () => {
            changeShow( prev => !prev ) ;
        };
        showEyeComponent = (
            <div className={ "togglePassword " + (show ? "active" : "") } onClick={ () => toggleShow() } >
                <i className="lni lni-unlock"></i>
            </div>
        );

        type = show ? "text" : "password" ;
    }

    const [value , setValue ] = useState("") ;

    return (
        <>
            { showEyeComponent }
            <input type={ type } className="form-control" {...otherProps} ref={ref} value={ value } onChange={ e => setValue(e.target.value) } />
        </>
    )
})

export default Input ;