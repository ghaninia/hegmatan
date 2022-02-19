const Label = (props) => {
    const { children , ...otherProps } = props ;

    return (
        <label {...otherProps}>
            {children}
        </label>
    )
}


export default Label ;