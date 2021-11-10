
import './Home.css'
import Script from './homescript';
import { useEffect } from 'react';
const Home = () => {

    
 
   
    useEffect(()=>{
   const script = document.createElement("script")
   script.src = {Script}
   
   document.body.appendChild(script)

   return ()=> document.body.removeChild(script)
        }
    ,[])
 
 
    return (
        <>
        <h3 className="register">Register</h3>
          <div className='modal'>
                    <div className='closeBtn'><i class="far fa-times-circle"></i></div>
                    <div className='modalInner'>
                        <h1>Please register below</h1>
                        <div className='groupUsername'>
                            <label>Username (minimum 5 characters)</label>
                            <input className='modalUsername' type='text' required />
                        </div>
                        <div className='groupPassword'>
                            <label>Enter a password (minimum 8 characters)</label>
                            <input className='modalPassword' minLength="8" />
                            <label>Re-enter your password</label>
                            <input className='modalPasswordenter' minLength="8" required />
                            <div className='smallPrint'>Make Sure your passwords match</div>
                            <div className='smallPrint'>Make Sure all fields are filled</div>
                        </div>
                        <div className='registerBtn'>
                        <span>Register</span>
                    </div>
                    </div>
                </div>
            <div className="container login">
                <div className='log'>
                    <h1 className='logo'>Pric<span>£</span></h1>
                    <label for="username"></label>
                    <input className="userName" type="text" name="username" placeholder="username" required />
                    <input className="password" type="password" minLength="8" name='password' placeholder="password" required />
                    <div className='loginBtn'>
                        <span>Login</span>
                    </div>
                </div>
              
            </div>
        </>
    )
    
 
}
export default Home;