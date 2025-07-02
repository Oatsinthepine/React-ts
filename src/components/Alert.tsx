interface Props {
    // text: string
    // instead of text, we can use children to allow any content to be passed to the Alert component
    children: React.ReactNode;
}


const Alert = ({children}: Props) => {
    return (
        <div className="alert alert-primary" role="alert">{children}</div>
    )
}

export default Alert