import {TextField} from "@mui/material";
import React from "react";
import "./formInput.css"

const FormInput = (props) => {
    return(
        <div className="form_input">
            <TextField label={props.label} variant="outlined" fullWidth />
        </div>
    )
}

export default FormInput