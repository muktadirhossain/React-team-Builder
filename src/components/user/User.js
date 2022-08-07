import React,{useState} from 'react'
import './User.css';
import photo from '../../Assets/proPic.jpg';



function User(props) {
  const{name, phone, website, email} = props.user;
  const addTeamMember = props.addTeamMember;
  const [mobile, setMobile] = useState('');
  
  // Show Button Event Handler: //
  const showPhoneNum = () => setMobile(phone);


 // console.log(props.user)
  return (
    <div className='user'>
      <div className='user_img'>
        <img src={photo} alt="photo" />
      </div>
      <div className='user_info'>
        <h2>{name}</h2>
        <p>Phone Number : {mobile}</p>
        <p>Em@il Address : {email}</p>
        <p>
          <a href={website}> {website} </a>
        </p>
        <button onClick={showPhoneNum}>Show phone Number</button>
        <br />
        <button onClick={()=> addTeamMember(props.user) }>Add to the team</button>
      </div>
    </div>
  )
}

export default User
