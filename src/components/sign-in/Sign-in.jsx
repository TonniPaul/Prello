import './sign-in.css'
import contentSignUp from '../../static/objectFiles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Dashboard from '../scrumboard/dashboard';


const SignIn = () => {
   const schema = yup.object().shape({
      email : yup.string().email('This is not a valid email address').required('input a valid email'),
      password: yup.string().required('input a valid password').matches(
         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
   })
   const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
   })

   const onSubmit = (data) => {
      alert(data)
      return(
         <Dashboard/>
      )
   
   }
  return (
    <div className='padding'>
      <h1>Already have an account? <span>Sign in here!</span></h1>
      <form onSubmit={ handleSubmit(onSubmit) } >
         {contentSignUp.inputs2.map((input,key) =>{
            return(
               <div key={key} className='form'>
                  <label htmlFor={input.name}>{input.name}</label>
                  <input type={input.type} name ={input.name} {...register(input.name)} />
                  <small className='error-message'>{errors[input.name]?.message}</small>
               </div>
            )
         })}
         <button><Link to='/dashboard' className='links'>Sign In</Link></button>
      </form>
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      <p> Back to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default SignIn;