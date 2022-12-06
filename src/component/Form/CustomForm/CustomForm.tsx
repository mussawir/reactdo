import React from 'react'


// import React, {useState} from "react";
// import { Typography,Paper,Button} from "@mui/material";
// import CustomTextField from "../CustomTextField/CustomTextField";
// import CustomDropDown from "../CustomDropDown/CustomDropDown";
// import "../CustomForm/FromStyle.css";


// type Values = {
//     name : string,
//     email : string,
//     age : string,
// }

// const ages = [
//     {value : "20-40",label :"From 20 to 40"},
//     {value : "40-50",label :"From 40 to 50"},
// ]

// const CustomForm = () => {

 
//     const [values,setValues] = useState<Values>({
//         name : "",
//         email : "",
//         age : "",
//     });

//     const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
//         setValues({...values,[event.target.name] : event.target.value});
//     }

//     const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(values)
//     }

//     return (
//         <Paper className="containerForm">
//             <Typography variant={"h4"} className="title">Form</Typography>
//             <form onSubmit={(e) => handleSubmit(e)} className="Customform">
//                 <CustomTextField changeHandler={handleChange} label={"Name"} name={"name"}/>
//                 <CustomTextField changeHandler={handleChange} label={"Email"} name={"email"}/>
//                 <CustomDropDown />
//                 <Button className="SubmitBtn" type={"submit"} variant={"contained"} >Submit</Button>
//             </form>
//         </Paper>
//     );
// }

// export default CustomForm;



type Props = {}

const CustomForm = (props: Props) => {
  return (
    <div>CustomForm</div>
  )
}

export default CustomForm