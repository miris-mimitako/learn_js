import {EditButton} from "./EditButton";

const style = {
    width:"300px",
    height:"200px",
    margin:"8px",
    borderRadius:"8px",
    badckgroundColor:"#e9dbd0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
};

export const Card = () => {

    return (
        <div style = {style}>
            <p>Yamada</p>
            <EditButton />
        </div>
    );
};