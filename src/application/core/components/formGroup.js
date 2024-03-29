import Label from "./label" ;
const FormGroup = (props) => {

    let { className , children , label , icon } = props ;

    icon = icon ?  <div className="prepend h3"><i className={icon}></i></div> : "" ;

    className += " form-group " ;

    return (
        <div className={ className }>
            {children}
            <Label>{ label }</Label>
        </div>
    );
}


export default FormGroup ;