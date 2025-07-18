const Button = ({children, className, disabled = false, onClick}) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
    );
}

export default Button;