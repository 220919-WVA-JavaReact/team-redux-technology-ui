import { SyntheticEvent, useState } from "react";
import { User } from "../models/user"

interface ILoginProps {
  currentUser: User | undefined,
  setCurrentUser: (nextUser: User) => void
}

export default function RegisterModal() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  let updateFirst_name = (e: SyntheticEvent) => {
    setFirst_name((e.target as HTMLInputElement).value);
  }

  let updateLast_name = (e: SyntheticEvent) => {
    setLast_name((e.target as HTMLInputElement).value);
  }

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let updateEmail = (e: SyntheticEvent) => {
    setEmail((e.target as HTMLInputElement).value);
  }

  let register = async (e: SyntheticEvent) => {
    if (!first_name || !last_name || !username || !password || !email) {
    console.log("All fields are required.")
    } else {
    try {
        let response = await fetch (`${import.meta.env.VITE_API_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ first_name, last_name, username, password, email })
        })
        if (response.status == 201) {
                  console.log("account created successfully!")
                } else {
                  console.log('Unable to create account with these credentials.');
                }
              } catch (err) {
                console.log(err);
              }

    }
  }
    return (
        <div className="modal" id="register-modal">
            <div className="modal-box flex flex-col m-2 max-w-sm" style={{ backgroundImage: `url("img/site/portal_effect.webp")` }}>
                {/* put forms and stuff in here */}
                <input type="text" placeholder="First Name" className="input input-bordered input-success w-full" onChange={updateFirst_name}/>
                <br/>
                <input type="text" placeholder="Last Name" className="input input-bordered input-success w-full" onChange={updateLast_name}/>
                <br/>
                <input type="text" placeholder="Username" className="input input-bordered input-success w-full" onChange={updateUsername}/>
                <br/>
                <input type="password" placeholder="Password" className="input input-bordered input-success w-full" onChange={updatePassword}/>
                <br/>
                <input type="text" placeholder="Email" className="input input-bordered input-success w-full" onChange={updateEmail}/>
                <br/>

                <div className="modal-action">
                    <a href="#" className="btn" onClick={register}>Register</a>
                    <br/>
                    <a href="#" className="btn">Close</a>
                </div>
            </div>
        </div>
    )
}