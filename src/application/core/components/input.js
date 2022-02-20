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

    return (
        <>
            { showEyeComponent }
            <input type={ type } className="form-control" {...otherProps} ref={ref} />
        </>
    )
})

export default Input ;