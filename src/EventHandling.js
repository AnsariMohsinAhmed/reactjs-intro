export default function EventHandling() {

    function handleClick() {
        alert('You clicked me!!!');
    }

    return (
        <>
            <button onClick={handleClick}>Click me!!!</button>
        </>
    );
}