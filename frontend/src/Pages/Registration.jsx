import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

export default function Registration() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image : ""
  });


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async(e)=>{
      const data = await ImagetoBase64(e.target.files[0])
  

      setData((preve)=>{
          return{
            ...preve,
            image : data
          }
      })

  }
console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
    
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
    

        // alert(dataRes.message);
        toast(dataRes.message)
        if(dataRes.alert){
          navigate("/login");
        }
       
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }
  };



  return (
    <div>
      <Container className="mt-5">
        <Form >
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            type={"text"}
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lname"
              type="text"
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control name="password"
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="cpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control name="phone"
              type="number"
              placeholder="Mobile No."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address"
              placeholder="Enter Address"
            />
          </Form.Group>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">
              Upload profile image
            </label>
             <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>

          </div>
          <Button variant="outline-dark" type="submit">
            Create Account
          </Button>
        </Form>
      </Container>
    </div>
  );
}


// import React, { useState } from "react";
// import loginSignupImage from "../assets/login.jpg";
// import { BiShow, BiHide } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// // import { BsEmojiSmileUpsideDown } from "react-icons/bs";
// import { ImagetoBase64 } from "../utility/ImagetoBase64";
// import { toast } from "react-hot-toast";

// function Signup() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     image : ""
//   });

//   const handleShowPassword = () => {
//     setShowPassword((preve) => !preve);
//   };
//   const handleShowConfirmPassword = () => {
//     setShowConfirmPassword((preve) => !preve);
//   };

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((preve) => {
//       return {
//         ...preve,
//         [name]: value,
//       };
//     });
//   };

//   const handleUploadProfileImage = async(e)=>{
//       const data = await ImagetoBase64(e.target.files[0])
  

//       setData((preve)=>{
//           return{
//             ...preve,
//             image : data
//           }
//       })

//   }
// console.log(process.env.REACT_APP_SERVER_DOMIN)
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const { firstName, email, password, confirmPassword } = data;
//     if (firstName && email && password && confirmPassword) {
//       if (password === confirmPassword) {
    
//           const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
//             method : "POST",
//             headers : {
//               "content-type" : "application/json"
//             },
//             body : JSON.stringify(data)
//           })

//           const dataRes = await fetchData.json()
    

//         // alert(dataRes.message);
//         toast(dataRes.message)
//         if(dataRes.alert){
//           navigate("/login");
//         }
       
//       } else {
//         alert("password and confirm password not equal");
//       }
//     } else {
//       alert("Please Enter required fields");
//     }
//   };

//   return (
//     <div className="p-3 md:p-4">
//       <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
//         {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
//         <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
//           <img src={data.image ? data.image :  loginSignupImage} className="w-full h-full" />

//           <label htmlFor="profileImage">
//             <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
//               <p className="text-sm p-1 text-white">Upload</p>
//             </div>
//             <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
//           </label>
//         </div>

//         <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type={"text"}
//             id="firstName"
//             name="firstName"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.firstName}
//             onChange={handleOnChange}
//           />
// <br /> <br />
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type={"text"}
//             id="lastName"
//             name="lastName"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.lastName}
//             onChange={handleOnChange}
//           />
// <br /> <br />
//           <label htmlFor="email">Email</label>
//           <input
//             type={"email"}
//             id="email"
//             name="email"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.email}
//             onChange={handleOnChange}
//           />
// <br /> <br />
//           <label htmlFor="password">Password</label>
//           <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               className=" w-full bg-slate-200 border-none outline-none "
//               value={data.password}
//               onChange={handleOnChange}
//             />
//             <span
//               className="flex text-xl cursor-pointer"
//               onClick={handleShowPassword}
//             >
//               {showPassword ? <BiShow /> : <BiHide />}
//             </span>
//           </div>
//           <br /> <br />
//           <label htmlFor="confirmpassword">Confirm Password</label>
//           <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirmpassword"
//               name="confirmPassword"
//               className=" w-full bg-slate-200 border-none outline-none "
//               value={data.confirmPassword}
//               onChange={handleOnChange}
//             />
//             <span
//               className="flex text-xl cursor-pointer"
//               onClick={handleShowConfirmPassword}
//             >
//               {showConfirmPassword ? <BiShow /> : <BiHide />}
//             </span>
//           </div>
//           <br /> <br />
//           <button className="w-full max-w-[150px] m-auto  bg-green-900 hover:bg-green-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
//             Sign up
//           </button>
//         </form>
//         <p className="text-left text-sm mt-2">
//           Already have account ?{" "}
//           <Link to={"/login"} className="text-green-900 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;