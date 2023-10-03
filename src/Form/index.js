import React, { useState, useEffect }  from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step/index.js";

// validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import { validarApellidos, validarNombre, validarTelefono } from "./DatosPersonales/validaciones";

const Form = () => {
  const [step, setStep]= useState(0);
  const [pasos, setPasos]=useState({})

  useEffect(() => {
    console.log("Useefecct");
  });
  useEffect(()=>{
    console.log("se ha actualizado",step);

  },[step])
  //step 0 => DatosUsuario
  //step 1 => DatosPersonales
  //step 2 => DatosEntrega
  //step 3 => Complete
  const updateStep =(step) =>{
      //console.log(step,"console");
      setStep(step)
  };
    const steps = {
     0:  <DatosUsuario   updateStep={updateStep}/>,
     1:  <DatosPersonales updateStep={updateStep}/>,
     2:  <DatosEntrega   updateStep={updateStep}/>,
     3:  <Complete/>,  
 }
const handleChange=(e, position, currentStep, validator)=>{
  const value =  e.target.value
  console.log(e,position, currentStep,validator);
  const valid= validator(value)

} 
const onSubmit=(e)=>{
  e.preventDefault()
  let newstep= step +1
  console.log("nstep",newstep);
  setStep(newstep)
  console.log("step",step);
  
}

 const stepFlow={
  0: {
   inputs:[
       {
         label: "Correo Electrónico",
         type: "email",
         value: "",
         valid: null,
         onChange : handleChange,
         helperText:"",
         validator: validarEmail,
       },
       {
         label: "Contraseña",
         type: "password",
         value: "",
         valid: null,
         onChange : handleChange,
         helperText: "Ingresa una contraseña válida, Al menos 8 caracteres y maximo 20",
         validator: validarPassword,
       },
     ],
     buttonText: "Siguiente",
    onSubmit: onSubmit,
   },
   1: {
    inputs:[
        {
          label: "Correo Electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange : handleChange,
          helperText:"",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange : handleChange,
          helperText: "Ingresa una contraseña válida, Al menos 8 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
     onSubmit: onSubmit,
    }
};
 

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step <3 && <Stepper step={step}></Stepper>}
        {/* {steps[step]} */}
        <Step data={stepFlow[step]} step={step}></Step>
      </FormSpace>
    </Box>
  );
};

export default Form;
