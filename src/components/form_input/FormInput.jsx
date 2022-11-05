import {TextField} from "@mui/material";
import React from "react";

const FormInput = (props) => {

    const {name , label ,  value , isValid , helperText , onBlur,type } = props;
    return(
        <div className="form_input">
            <TextField 
                inputProps={{
                    'id': `${name}`
                  }}
                sx={{marginTop:1}}
                name = {name}
                label={label}
                variant="outlined"
                value={props.value}
                fullWidth
                error = {props.isValid}
                helperText={helperText}
                onBlur={onBlur}
                onChange={(e)=>props.setValue(e.target.value)}
               type={props.type ? "password":""}
            />
        </div>
    )
}

export default FormInput