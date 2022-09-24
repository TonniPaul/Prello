import "./backdrop.css"
import Logo from "./Logo"

const Backdrop = (props) => {
   const classes = ' ' + props.className
   return (
      <div className='backdrop'>
         <nav className="backdrop-nav">
            <Logo />
         </nav>
         <div className={classes}>
            {props.children}
         </div>

      </div>
  )
}


export default Backdrop