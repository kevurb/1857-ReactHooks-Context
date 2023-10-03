import React, { useState } from "react";
import { TextField, Button, Box, useScrollTrigger } from "@mui/material";
import { validarApellidos, validarNombre, validarTelefono } from "./validaciones";

const DatosPersonales = ({updateStep}) => {
  const [nombre, setNombre] = useState({value:'',valid:null})
  const [apellido, setApellido]= useState({value:'',valid:null})
  const [num, setNum] = useState({value:'',valid:null})
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
      value= {nombre.value}
      error= {nombre.valid}
      onSubmit={(e)=>{
        e.preventDefault();
        updateStep(1);
        console.log({nombre, apellido, num});
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value= {nombre.value}
        error= {nombre.valid === false}
        helperText= {nombre.valid === false &&"Ingresa minimo 2 caratetes y maximo 30 catacteres"}
        onChange={(e)=>{
          const value= e.target.value
          const valid= validarNombre(value)
          setNombre({value, valid})
          console.log({value, valid});
        }

        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value= {apellido.value}
        error= {apellido.valid === false}
        helperText= {apellido.valid === false &&"Ingresa minimo 2 caratetes y maximo 30 catacteres"}
        onChange={(e)=>{
          const value= e.target.value
          const valid= validarApellidos(value)
          setApellido({value, valid})}
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value= {num.value}
        error= {num.valid === false}
        helperText={ num.valid === false &&"Ingresa minimo 8 caratetes y maximo 10 catacteres"} 
        onChange={(e)=>{
          const value= e.target.value
          const valid= validarTelefono(value)
          setNum({value, valid})}
          
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
