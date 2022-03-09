import React from 'react'
import '../../src/CSSFile/Login.css'

function Login() {
  return (
    <div>
    <div className="login-wrap mt-5">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="for-pwd" /><label htmlFor="tab-2" className="tab">Forgot Password</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username or Email</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input style={{paddingBottom:25}} type="submit" className="button" defaultValue="Sign In" />
              </div>
              <div className="hr" />
            </div>
            <div className="for-pwd-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username or Email</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" defaultValue="Reset Password" />
              </div>
              <div className="hr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login