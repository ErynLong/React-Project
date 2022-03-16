// import React from 'react'
// import * as Yup from "yup";
// import { useFormik } from 'formik';
// import Button from "../components/Button";
// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';

// let categories=[{id:1,name:"Shirts"},{id:2,name:"Shoes"},{id:3, name:"Hats"}]

// const FormSchema = Yup.object({
//     "name":Yup.string().required("Required"),
//     "desc":Yup.string().required("Required"),
//     "price":Yup.string().matches(/^\d+(\.\d{1,2})?$/, "Must be a Valid Price").required("Required"),
//     "img":Yup.string().required("Required"),
//     "category_id":Yup.number().integer().required("Required")
// })
// export default function ItemForm({item={id:1, name:"item1", desc:'my test item', category_id:3, price: 9.99, img:'my-image.png'}}) {

//     const initialValues={
//         name:item?.name ?? '',
//         desc:item?.desc ?? '',
//         price:item?.price ?? '',
//         img:item?.img ?? '',
//         category_id:item?.category_id ?? ''
//     }

//     const handleSubmit =(values,resetForm)=>{
//         console.log(values)
//         if(!item){
//             console.log("Create")
//         }else{
//             console.log("edit")
//         }
//         resetForm(initialValues);
//     }

//     const formik = useFormik({
//         initialValues:initialValues,
//         validationSchema:FormSchema,
//         onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
//         enableReinitialize:true

//     })
//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <TextField
//         id="firstname"
//         firstname="First Name"
//         fullWidth
//         sx={{mb:2, mt:2}}
//         label="First Name"
//         placeholder="First Name"
//         value={formik.values.firstName}
//         onChange={formik.handleChange}
//         error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//         helperText={formik.touched.firstName && formik.errors.firstName}
//         />
//     <TextField
//         id="lastname"
//         lastname="Last Name"
//         fullWidth
//         sx={{mb:2, mt:2}}
//         label="Last Name"
//         placeholder="Last Name"
//         value={formik.values.lastName}
//         onChange={formik.handleChange}
//         error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//         helperText={formik.touched.lastName && formik.errors.lastName}
//         />
//     <TextField
//         id="email"
//         name="Email"
//         fullWidth
//         sx={{mb:2, mt:2}}
//         label="Email"
//         placeholder="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         error={formik.touched.email && Boolean(formik.errors.email)}
//         helperText={formik.touched.email && formik.errors.email}
//         />
//     <TextField
//         id="password"
//         name="password"
//         type="password"
//         fullWidth
//         sx={{mb:2}}
//         label="Password"
//         placeholder="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         error={formik.touched.password && Boolean(formik.errors.password)}
//         helperText={formik.touched.password && formik.errors.password}
//         />

// <Button type="submit" sx={{ width: "100%" }}>Submit</Button>

// </form>
//   )
// }