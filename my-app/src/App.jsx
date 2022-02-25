import { useEffect } from "react";
import { useState} from "react"
import { ColoredMessage } from "./components/ColoredMessage";



export const App = () => {

    console.log("rendering");
    //defined state
    const [num, setNum] = useState(0);
    
    const onClickButton =() => {
        setNum((prev) => prev += 1) ;
    };

    useEffect(() => {
        alert();
    },[num]);

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
            <p>{num} </p>
        </>
        // you can use empty tag for error escaping.
        // you can insert JavaScript after return.
    );

};  