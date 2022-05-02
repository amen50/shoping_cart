import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SIgnIn extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email: '',
            password: '',
        }
    }
handelSubmit = event => {
    event.preventDefault();
    this.setState({email:'',password:''})
}

handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

 render(){
     return(
         <div className="sign-in">
             <h2>I alrady have an account</h2>
             <span>Sing in with your email and password</span>
             <form onSubmit={this.handelSubmit}>
                <FormInput name="email" 
                     type="email" 
                     handleChange={this.handleChange} 
                     value={this.state.email} 
                     label='email'
                     required
                />
                
                <FormInput name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                <div className="button">
                <CustomButton type="submit"> Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  sign in with google                
                  </CustomButton>       
                  </div>    
            </form>     
         </div>
     )     
 }
}

export default SIgnIn;