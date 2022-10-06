import './sign-in.css'
import contentSignUp from '../../static/objectFiles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Backdrop from '../UI/backdrop/Backdrop';
import signInImg from '../../images/robot-checking-user-profile.svg';


const SignIn = () => {
   const schema = yup.object().shape({
      email : yup.string().email('This is not a valid email address').required('input a valid email'),
      password: yup.string().required('input a valid password').matches(
         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
         "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
   })
   const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
   })
   const navigate = useNavigate()
   const onSubmit = () => {
         navigate('/dashboard')
   }
  return (
   <Backdrop className='content-div sign-in-grid'>
      <div className="signup-hero">
         <img src={signInImg} alt="." className='sign-up-img' />
      </div>
      <div className='global-container'>
         <h1 className="header-text"> Sign in</h1>
         <form onSubmit={ handleSubmit(onSubmit) } >
            {contentSignUp.inputs2.map((input,key) =>{
               return(
                  <div key={key} className='form'>
                     <label htmlFor={input.name}>{input.name}</label>
                     <input type={input.type} name ={input.name} {...register(input.name)} id={errors[input.name] ? 'red' : ''} />
                     <small className='error-message' >{errors[input.name]?.message}</small>
                  </div>
               )
            })}
            <button>Sign In</button>
         </form>
         <p className='call-to-action'>Don't have an account? <Link to='/signup' className='link'>Sign Up</Link></p>
      </div>
   </Backdrop>
  )
}

export default SignIn;

// redirecting to new page on succesful validation in yup?