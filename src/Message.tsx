// This is the way to pass parameters to a component in React
interface MessageProps {
    name:string;
}

function Message({name}: MessageProps) {
    return <h1>Hello {name}</h1>
};

export default Message;