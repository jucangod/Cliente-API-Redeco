function Button({ text, onClick, type }) {
    return <button type={type} onClick={onClick}>{text}</button>;
}

export { Button };