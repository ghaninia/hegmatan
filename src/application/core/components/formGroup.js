import Label from "./label" ;

const FormGroup = (props) => {

    let { className , children , label , icon } = props ;

    icon = icon ?  <div className="prepend h3"><i className={icon}></i></div> : "" ;

    return (
        <div className="form-group ${ className }">
            <Label>{ label }</Label>
            {icon}
            {children}
        </div>
    );
}


export default FormGroup ;