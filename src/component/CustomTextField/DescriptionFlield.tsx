import React from "react";
import {TextField} from "@mui/material";

type DescriptionFlield = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const DescriptionFlield = (props: DescriptionFlield) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            multiline
            maxRows={8}
            id="outlined-multiline-static"
        />

        
    );
}

export default DescriptionFlield;