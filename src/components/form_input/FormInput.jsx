import {TextField} from "@mui/material";
import React from "react";
import "./formInput.css"

const FormInput = (props) => {

    const {name , label ,  value , isValid , helperText , onBlur } = props;
    return(
        <div className="form_input">
            <TextField
                name = {name}
                label={label}
                variant="outlined"
                value={value}
                fullWidth
                error = {isValid}
                helperText={helperText}
                onBlur={onBlur}
                onChange={(e)=>props.setValue(e.target.value)}
            />
        </div>
    )
}

export default FormInput