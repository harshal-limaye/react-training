function Card(props) {
    function handleEvent() {
        console.log(props.user.name);
    }

    return <div>
        <h1 onMouseEnter={handleEvent}>{props.user.name}</h1>
        <p>Age: {props.user.age}</p>
        <p>{props.user.jobTitle}</p>
    </div>
}

export default Card;