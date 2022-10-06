import './sign-up.css';
import contentSignUp from '../../static/objectFiles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '../UI/backdrop/Backdrop';
import signImg from '../../images/sign-up-form-3798675.png';

const SignUp = () => {

   const schema = yup.object().shape({
      fullname: yup.string()
               .min(4, 'Must be atleast 3 characters and cannot include numbers')
               .required('This is a required field'),
      email: yup.string()
            .email('Please input a valid email address')
            .required('Email is required'),
      password: yup.string()
            .required('Enter a valid password')
            .matches(
               /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
               "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
      confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], "Password mismatch!!")
            .required('This is a required field')
   });
   
   const { register, handleSubmit, formState: {errors} } = useForm({
      resolver : yupResolver(schema)
   });
   const navigate = useNavigate()
   const onSubmit = (data) => {
      navigate('/signin')
   }

  return (
   <Backdrop className='content-div'>

      <div className='global-container '>
         <h1 className="header-text"> Sign Up</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
         {contentSignUp.inputs.map((input, key) => {
            return(
               <div key={key} className='form'>
                  <label htmlFor={input.name}>{input.label}</label>
                  <input type = {input.type} name={input.name} {...register(input.name)} id={errors[input.name] && 'red'} />
                  <span className='error-message'>{errors[input.name]?.message}</span>
               </div>
         )
         })}

            <select id='options'>
               <option value='Developer'> Developer</option>
               <option value='Owner'> Owner</option>
            </select>
            <button>Sign Up</button>
         </form>
         <p className='call-to-action'>Already have an account? <Link to='/signin' className='link'>Sign In </Link></p>
      </div>
      <div className="signup-hero">
         <img src={signImg} alt="." className='sign-up-img' />
      </div>
   </Backdrop>

  )
}

export default SignUp;
