import React from "react";
import {TextField} from "@mui/material";

type EmailFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const EmailField = (props: EmailFieldProps) => {
    return (
        <TextField
        type="email"
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            variant={"outlined"} 
            size={"small"}
            margin={"dense"}
        />
    );
}

export default EmailField