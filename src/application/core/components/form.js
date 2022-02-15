const Form = (props) => {
    const {children , otherProps } = props ;
    return (
        <form {...otherProps}>
            {children}
        </form>
    )
}

export default Form ;
