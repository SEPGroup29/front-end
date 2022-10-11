import React from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OutlinedInput, InputLabel, FormControl, Typography } from "@mui/material";

export default function Password({ name, label, value, values, setValues, handleChange, error }) {
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl fullwidth='true' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput sx={{ marginTop: 1 }}
                name={name}
                label={label}
                type={values.showPassword ? 'text' : 'password'}
                variant="outlined"
                value={value}
                fullWidth
                error={error !== ''}
                onChange={handleChange(name)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {error !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{error}</Typography>}

        </FormControl>
    )
}