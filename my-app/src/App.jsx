export const App = () => {
    const onClickButton =() => {
        alert();
    };

    // CSS object
    const contentStyle = {
        color: "blue",
        fontSize: "20px" // Cannot use font-size 
    };

    // return null;
    return (
        // after return, two or more tags are surround  one tag.
        <>
            {console.log("test")}
            <h1 style = {{color: "red"}}>Hello world</h1>
            <p style={contentStyle} >Are you Okey?</p>
            <button onClick = {onClickButton}>button</button>
        </>
        // you can use empty tag for error escaping.
        // you can insert JavaScript after return.
    );

};  