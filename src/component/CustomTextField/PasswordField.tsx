import React from "react";
import {TextField} from "@mui/material";

type PasswordFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const PasswordField = (props: PasswordFieldProps) => {
    return (
        <TextField
            type="password"
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            variant={"outlined"} 
            size={"small"}
            margin={"dense"}
        />
    );
}

export default PasswordField;