import React from 'react'
import '../../src/App.css'

function Signup() {
  return (
    <div>
      <section>
        <div className="container">
          <div id="login-box" style={{boxShadow:12}}>
            <div class="left">
              <h1>Sign up</h1>

              <input type="text" name="username" placeholder="Your Name" />
              <input type="text" name="email" placeholder="Your E-mail" />
              <input type="text" name="number" placeholder="Mobile Number" />
              <input type="text" name="proffesion" placeholder="Your Proffession" />
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="password2" placeholder="Confirm Password" />

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