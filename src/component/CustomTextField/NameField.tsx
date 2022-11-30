import React from "react";
import {TextField} from "@mui/material";

type NameFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const NameField = (props: NameFieldProps) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            variant={"outlined"} 
            size={"small"}
            margin={"dense"}
        />
    );
}

export default NameField;