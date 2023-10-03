import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";
const DatosEntrega = ({updateStep}) => {
  const [dir, setDir]= useState({value:'',valid:null});
  const [city, setCity]=useState({value:'',valid:null});
  const [province, setProvince]=useState({value:'',valid:null});

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      
      onSubmit={(e)=>{
        e.preventDefault();
        updateStep(2);
        console.log({dir,city,province});
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={dir.value}
        onChange={(e)=>{
          const value = e.target.value
          const valid = validarInput(value)
          setDir({value,valid})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(e)=>{
          const value = e.target.value
          const valid = validarInput(value)
          setCity({value,valid})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(e)=>{
          const value = e.target.value
          const valid = validarInput(value)
          setProvince({value,valid})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
