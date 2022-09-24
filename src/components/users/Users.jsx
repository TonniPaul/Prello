import './users.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Users = () => {
   const [ users, setUsers ] = useState([]);
   // const [ isLoading, setIsLoading ] = useState(false);
   const [ isOpen, setIsOpen] = useState(false)

   const openModal = () => {
      setIsOpen(true)
    }

   const closeModal = () => {
      setIsOpen(false)
   }

   useEffect(() => {
      axios.get(`https://my.api.mockaroo.com/user.json?key=fc04a6c0`)
         .then((res) => setUsers(res.data))
   }, [])

  return (
    <div className='user--container'>
      <div className={`sub-cont ${ !isOpen && 'hide-sub-cont'}`}>
         <h4 id='user--header'
            style={{
               bottom: !isOpen ? 0 : ''
            }}
         > 
            <p className={`cnnct ${ !isOpen && 'hide-cnnct'}`}>
               <span className={` ${ !isOpen && 'hide-content'}`}>Connected Users</span>
               <span className="material-symbols-outlined green"> radio_button_checked</span>
            </p>
            { isOpen ?
               <span 
                  className="material-symbols-outlined btn"
                  onClick={!isOpen ? openModal : closeModal}
               >
                  keyboard_double_arrow_down
               </span> :
               <span 
                  className="material-symbols-outlined btn"
                  onClick={!isOpen ? openModal : closeModal}
               >
                  keyboard_double_arrow_up
               </span> 
            }
         </h4>
         <div
            style={{
               marginTop: isOpen ? '50px' : ''
            }}
         ></div>
         <div className='users-data'>
            {users.map(({username, id, avatar}) => {
               return(
                  <div key={id} className='user-data'  id={isOpen? 'showw' : 'hiddden'} >
                  <img src={avatar} alt={username} className='avartarIcon' />
                  <p>{username} </p>
                  </div>
               )
            })}
         </div>
      </div>
    </div>
  )
}

export default Users;



// export default class Users extends Component {
//    constructor() {
//       super();

//       this.state ={
//          users: [],
//          loading: true
//       }
//    }
//    componentDidMount(){
//       axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/,k')
//       .then(res => this.setState({
//          users: res.data.slice(0,8)
//       }))
//    }

//   render() {

//     return (
//       <div className='users'>
//          <h4>Connected Users </h4>
//          <div>
//             {this.state.users.map(({nickname, id}) => {
//                return(
//                   <div key={id}>
//                      {nickname}
//                   </div>
//                )
//             })}
//          </div>
//       </div>
//     )
//   }
// }