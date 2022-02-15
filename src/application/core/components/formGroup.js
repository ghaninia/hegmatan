import Label from "./label" ;

const FormGroup = (props) => {
    const { className , children , label } = props ;
    return (
        <div className="form-group ${ className }">
            <Label>{ label }</Label>
            {children}
        </div>
    );
}


export default FormGroup ;