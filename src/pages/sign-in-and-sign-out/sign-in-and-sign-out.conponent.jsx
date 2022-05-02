import React from "react";
import './sign-in-and-sign-out.style.scss';
import SIgnIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sigin-up/sign-up.component";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
          <SIgnIn/>
          <SignUp/>
    </div>
)

export default SignInAndSignUpPage;