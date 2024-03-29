import ReactDOM from "react-dom";
import { App } from "./App";
import {AdminFlagProvider} from "./components/providers/AdminFlagProvider"


// exported
// const App = () => {
//     // return null;
//     return (
//         // after return, two or more tags are surround  one tag.
//         <> 
//             <h1>Hello world</h1>
//             <p>Are you Okey?</p>
//         </>
//         // you can use empty tag for error escaping.
//     );

// };  

ReactDOM.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>,
    document.getElementById("root")
    ); // <App /> は関数の呼び出しを指定している。