import React from "react";
import {TextField} from "@mui/material";

type PriceFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const PriceField = (props: PriceFieldProps) => {
    return (
        <TextField
            type="number"
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            variant={"outlined"} 
            size={"small"}
            margin={"dense"}
        />
    );
}

export default PriceField;