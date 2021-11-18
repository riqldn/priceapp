
import { useEffect } from 'react';
import './Login.css'

const Home = () => {

   
    useEffect(
        ()=>{
            var modalUser = document.querySelector(".modalUsername")
            var user ;
            var userPassword ;
            var registerPassword = document.querySelector(".modalPassword")
            var retypePassword = document.querySelector(".modalPasswordenter")
            var submitReg = document.querySelector(".registerBtn")
            var modal = document.querySelector(".modal")
            var closeBtn = document.querySelector(".far")
            var smallPrint = document.querySelector(".smallPrint")
            var registerBtn = document.querySelector(".register")
            var loginUser = document.querySelector(".userName")
            var loginPass = document.querySelector(".password")
            var loginBtn = document.querySelector(".loginBtn")
            function reg(){
                console.log(registerPassword.value, retypePassword.value)//validation and making sure users passwords match
                if((registerPassword.value == retypePassword.value) && registerPassword.value.length >= 8)
                {
                    user = modalUser.value
                    userPassword = registerPassword.value
                    modal.style.display = 'none'
                }
                else{
                    smallPrint.style.display = 'block'
                }
                console.log(user,userPassword)
            }
            const signIn=()=>{
                console.log(loginUser.value,user.value,modalUser.value)
               if(loginUser.value == modalUser.value && loginPass.value == registerPassword.value){
                   console.log("sign in")
                   window.location.assign('/account')
               }
            }
            function showModal(){
                modal.style.display = 'flex'
            }   

            function close(){
                modal.style.display = 'none'
            }
        loginBtn.addEventListener('click',signIn)
        submitReg.addEventListener('click',reg)
        closeBtn.addEventListener('click',close)
        registerBtn.addEventListener('click',showModal)
         var x = setTimeout(showModal,2000)
          
        
        return()=>{
            clearTimeout(x)
            closeBtn.removeEventListener('click',close)
            registerBtn.removeEventListener('click',showModal)
            submitReg.removeEventListener('click',reg)
            loginBtn.removeEventListener('click',signIn)
        }
        },[])
 
    return (
        
    
    
        <>
        

        <h3 className="register">Register</h3>
          <div className='modal'>
                    <div className='closeBtn'><i class="far fa-times-circle"></i></div>
                    <div className='modalInner'>
                        <h1>Please register below</h1>
                        <div className='groupUsername'>
                            <label>Username (minimum 5 characters)</label>
                            <input className='modalUsername' minLength='5' type='text' required />
                        </div>
                        <div className='groupPassword'>
                            <label>Enter a password (minimum 8 characters)</label>
                            <input className='modalPassword' minLength="8" />
                            <label>Re-enter your password</label>
                            <input className='modalPasswordenter' minLength="8" required />
                            <div className='smallPrint'>Make Sure your passwords match and all fields meet requirements</div>
                           
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