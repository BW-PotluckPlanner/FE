import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';


function Login( props) {

    const [redirect, setRedirect] = useState(false);

    const [errors, setErrors] = useState({  
        name: "",
        email: "",
        password: "",
        age: 0
      });
      const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        age: 0
      });
      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .required("Must include username."),
        password: Yup
          .string()
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
          name: 'Submitting. Please wait . . .'
        });
        console.log("submitted!");
        const data = {"username": formState.name,
        "password": formState.password, 
    };
        axios
          .post("https://potluck-planner1220.herokuapp.com/api/auth/login", data)
          .then(res => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            console.log("success!", res);
            localStorage.setItem('userId', res.data.userId)
            setFormState({name: "",
            email: "",
            password: "",
            age: 0})
            setErrors({
              ...errors,
              name: ''
            });
            

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
      };
    
  if (redirect === true) {
        return <Redirect to='/' />
  }
    
  return (
    <form onSubmit={formSubmit}>
    <label htmlFor="emailInput">
      Don't have an account yet? <Link to='/Register'>Sign Up</Link><br/>

      Username:
      <input id="nameInput" type="name" name="name" placeholder="Name"  onChange={inputChange} value = {formState.name}/>
    </label>
    
       
    <br/>
    <label htmlFor="passwordInput">
      Password:
      <input id="passwordInput" type="password" name="password" placeholder="Password"  onChange={inputChange} value = {formState.password}/>
    </label>
   
    <br/>
    <button disabled = {buttonDisabled} >Submit!</button>
    {errors.age.length > 0 ? (<p className="error">{errors.age}</p>) : null}
    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
    {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
    
  </form>
  );
}

export default Login;