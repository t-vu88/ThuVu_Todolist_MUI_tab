import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Todolist from "./Todolist"; 

function TabMenu(){
    const [value, setValue] = useState("one");

    const handleChange = (event, value) => {
        setValue(value);
    }
    
    return (
        <div className = "App">
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="HOME"/>
                <Tab value="two" label="TODOS" />
            </Tabs>
            {value === "one" && <div><h1>Welcome to my Todo app</h1></div>}
            {value === "two" && <Todolist />}
        </div>
    )
}

export default TabMenu;
