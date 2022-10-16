import React from "react";
import SignupStyles from './signup.module.scss'
const Signup = () => {
  return (
    <div className=" h-screen w-full bg-thin-light-green">
      <div className="">
        <div className={`${SignupStyles['signup-container']}`}>

          <div>
            <input type="text" className="input-style floating-input-field" name="name" placeholder=" "/>
            <label htmlFor="name" className="floating-label-field">dfsdf</label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
