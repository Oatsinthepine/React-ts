interface btProps {
    children?: React.ReactNode
    action: () => void
}


const Button = ({children, action}: btProps) => {
    return (
        <button type="button" className="btn btn-info" onClick={action}>{children}</button>
    )
}
export default Button;