import Label from "./label" ;
const FormGroupWithIcon = (props) => {

    let { className , children , label , icon } = props ;

    icon = icon ?  <div className="prepend h3"><i className={icon}></i></div> : "" ;

    className += " form-group " ;

    return (
        <div className={ className }>
            <Label>{ label }</Label>
            {icon}
            {children}
        </div>
    );
}


export default FormGroupWithIcon ;