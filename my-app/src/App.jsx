import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton =() => {
        alert();
    };

    // CSS object

    // const contentPinkStyle = {
    //     color: "pink",
    //     fontSize: "20px"
    // };

    // return null;
    return (
        // after return, two or more tags are surround  one tag.
        <>
            {console.log("test")}
            <h1 style = {{color: "red"}}>Hello world</h1>
            <ColoredMessage color="blue" message = "Are you okey?" />
            <ColoredMessage color="green" message = "Are you well?" />

            <ColoredMessage color ="blue">Are you well?</ColoredMessage>
            <ColoredMessage color ="green">I am good.</ColoredMessage>


            <button onClick = {onClickButton}>button</button>

        </>
        // you can use empty tag for error escaping.
        // you can insert JavaScript after return.
    );

};  