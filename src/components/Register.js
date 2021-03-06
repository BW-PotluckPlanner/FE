import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";


function Register() {

  const [redirect, setRedirect] = useState(false);

    const [errors, setErrors] = useState({  
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: ""
      });
      const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: ""
      });
      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .required("Must include username."),
        first_name: Yup
        .string()
        .min(3, "First Name must be at least 3 characters long.")
        .required("Must include First Name."),
         last_name: Yup
        .string()
        .min(3, "First Name must be at least 3 characters long.")
        .required("Must include Last Name."),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
      });

      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

      

      const inputChange = e => {
        e.persist();
        Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
        setFormState({
          ...formState,
          [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      })
    };

    const formSubmit = e => {
        e.preventDefault();
        setErrors({
          ...errors,
          name: 'Submitting. Please wait . . . '
        });
        console.log("submitted!");
        const data = {"username": formState.name,
        "password": formState.password, 
        "email": formState.email,
        "first_name": formState.first_name,
        "last_name": formState.last_name};
        axios
          .post("https://potluck-planner1220.herokuapp.com/api/auth/register", data)
          .then(res => {
            axios
          .post("https://potluck-planner1220.herokuapp.com/api/auth/login", {"username": formState.name, "password": formState.password})
          .then(res => {
            console.log("success!", res);
            setFormState({name: "",
            email: "",
            password: "",
            age: 0})
            setErrors({
              ...errors,
              name: ''
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem("user_id", res.data.id)

            setRedirect(true);

          })
          .catch(err => {
            
            console.log(err.response)
            setErrors({
              ...errors,
              name: err.response.data.message
            });

          }
          );
          })
          .catch(err => {
            
            console.log(err.response)
            setErrors({
              ...errors,
              name: err.response.data.message
            });
          }
          );
      };

  if (redirect === true) {
    return <Redirect to='/' />
  }
    
  return (

    
    <form onSubmit={formSubmit}>
    Already have an account? <Link to='/login'>Login</Link><br/>

    <label htmlFor="emailInput">
      Username:
      <input id="nameInput" type="name" name="name" placeholder="Name"  onChange={inputChange} value = {formState.name}/>
    </label>
    
    <br/>
    <label htmlFor="emailInput">
      Email:
      <input id="emailInput" type="email" name="email" placeholder="Email"  onChange={inputChange} value = {formState.email}/>
    </label>
       
    <br/>
    <label htmlFor="passwordInput">
      Password:
      <input id="passwordInput" type="password" name="password" placeholder="Password"  onChange={inputChange} value = {formState.password}/>
    </label>
    
    <br/>
    <label htmlFor="first_name">
      First Name:
      <input id="first_name" type="name" name="first_name" placeholder='first name'  onChange={inputChange} value = {formState.first_name}/>
    </label>
    <br/>
    <label htmlFor="last_name">
      Last Name:
      <input id="last_name" type="name" name="last_name" placeholder='last name'  onChange={inputChange} value = {formState.last_name}/>
    </label>
   
    <br/>
    <button disabled = {buttonDisabled} >Submit!</button>

    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
    {errors.first_name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
    
  </form>
  );
}

export default Register;
