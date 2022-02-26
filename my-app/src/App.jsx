
import {useContext} from "react";
import {Card} from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>管理者です</span>:<span>管理者以外です。</span> }
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    )
};


// import {useCallback, useState,memo} from "react";
// import { Child1} from "./components/Child1";
// import { Child4} from "./components/Child4";

// export const App = memo(() => {
//     console.log ("App rendering");

//     const [num, setNum] = useState(0);

//     const onClickButton = () => {
//         setNum(num + 1);
//     };
//     const onClickReset = useCallback(() => {
//         setNum(0);
//     },[]);

//     return (
//         <>
//             <button onClick = {onClickButton} >Button</button>
//             <p>{num}</p>
//             <Child1 onClickReset ={onClickReset} />
//             <Child4 />
//         </>
//     );

// });












// import { useEffect } from "react";
// import { useState} from "react"
// import { ColoredMessage } from "./components/ColoredMessage";




//  Section 6 deleted
// export const App = () => {

//     console.log("rendering");
//     //defined state
//     const [num, setNum] = useState(0);

//     const onClickButton =() => {
//         setNum((prev) => prev += 1) ;
//     };

//     useEffect(() => {
//         alert();
//     },[num]);

//     // return null;
//     return (
//         // after return, two or more tags are surround  one tag.
//         <>
//             {console.log("test")}
//             <h1 style = {{color: "red"}}>Hello world</h1>
//             <ColoredMessage color="blue" message = "Are you okey?" />
//             <ColoredMessage color="green" message = "Are you well?" />

//             <ColoredMessage color ="blue">Are you well?</ColoredMessage>
//             <ColoredMessage color ="green">I am good.</ColoredMessage>


//             <button onClick = {onClickButton}>button</button>
//             <p>{num} </p>
//         </>
//         // you can use empty tag for error escaping.
//         // you can insert JavaScript after return.
//     );

// };  