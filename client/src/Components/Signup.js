import React, { useState } from 'react'
import '../../src/CSSFile/SignUp.css'

function Signup() {

  const [inputData, setInputData] = useState({
    username:"",
    email:"",
    number:"",
    proffesion:"",
    password:"",
    password2:"",
  })
  let name, value;
  const changeData=(event)=>{
     name= event.target.name;
     value=event.target.value;

    //  store the data of input data and name ke jo value mean jo ham type kar rahay hai second wo 
    // name ke jo value hai dynamic data, when we write any thing in the name we get its value
    setInputData({...inputData,[name]:value})
  }

  return (
    <div>
      <section>
        <div className="container">
          <div id="login-box" style={{boxShadow:12}}>
            <div class="left">
              <h1>Sign up</h1>

              <input type="text" name="username" placeholder="Your Name" value={inputData.username} onChange={changeData}/>
              <input type="text" name="email" placeholder="Your E-mail" value={inputData.email} onChange={changeData}/>
              <input type="text" name="number" placeholder="Mobile Number" value={inputData.number} onChange={changeData}/>
              <input type="text" name="proffesion" placeholder="Your Proffession" value={inputData.proffesion} onChange={changeData}/>
              <input type="password" name="password" placeholder="Password" value={inputData.password} onChange={changeData}/>
              <input type="password" name="password2" placeholder="Confirm Password" value={inputData.password2} onChange={changeData}/>

              <input type="submit" name="signup_submit" value="Register" />
            </div>

            <div class="right">
              <span class="loginwith">Sign in with<br />social network</span>

              <button class="social-signin facebook">Log in with facebook</button>
              <button class="social-signin twitter">Log in with Twitter</button>
              <button class="social-signin google">Log in with Google+</button>
            </div>
            <div class="or">OR</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup