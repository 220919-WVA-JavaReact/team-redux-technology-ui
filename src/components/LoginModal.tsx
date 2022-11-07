import { SyntheticEvent, useState } from "react";
import { User } from "../models/user"

interface ILoginProps {
  currentUser: User | undefined,
  setCurrentUser: (nextUser: User) => void
}

export default function LoginModal(props: ILoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let login = async (e: SyntheticEvent) => {
    if (!username || !password){
      console.log('Please provide a username and a password')
    } else {
      try {
        let response = await fetch ('http://localhost:8080/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        })

        if (response.status == 200) {
          let token = response.headers.get('Authorization');
          if(token){
            sessionStorage.setItem('token', token);
          }
          props.setCurrentUser(await response.json());
          console.log(props.currentUser)
        } else {
          console.log('Incorrect username and/or password');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <div className="modal" id="login-modal">
      <div className="modal-box flex flex-col m-2 max-w-sm" style={{ backgroundImage: `url("img/site/portal_effect.webp")` }}>
        <input type="text" placeholder="Username" className="input input-bordered input-success w-full" onChange={updateUsername}/>
        <br/>
        <input type="password" placeholder="Password" className="input input-bordered input-success w-full" onChange={updatePassword}/>
        <br/>
        {/* <div className="modal-action"> */}
        <a href="#" className="btn" onClick={login}>Login</a>
        <br/>
        <a href="#" className="btn">Close</a>
        {/* </div> */}
      </div>
    </div>
  )
}
