import React from "react";
import './sign-up.style.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component{

    constructor(){
        super()
         this.state ={
            displayName: '',
            email:'',
            password:'',
            confirmPassword: '', 
         }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password , confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("password do not much")
            return; 
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
             this.setState ({
                displayName: '',
                email:'',
                password:'',
                confirmPassword: '',
             })
        }
        catch(error){
            console.error(error)
            alert("password must bew 6 characters")
        }
    }
     handelChange = event => {
         console.log(event.target)
         const{ name, value} = event.target;
         this.setState({[name]: value});
     }
    render(){
        const {displayName, email,password, confirmPassword} = this.state;
      return(
          <div className="sign-up">
           <h2 className="title">I do not have a account</h2>
           <span>sign up wiith your email and password</span>
           <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={this.handelChange}
                    label= 'Display Name'
                    requied
                    >
               </FormInput>
               <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={this.handelChange}
                    label= 'Email'
                    requied
                    >
               </FormInput>
               <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={this.handelChange}
                    label= 'Password'
                    requied
                    >
               </FormInput>
               <FormInput 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={this.handelChange}
                    label= 'Confirm Password'
                    requied
                    >
               </FormInput>
               <CustomButton type='submit'> SIGN UP</CustomButton>
           </form>
          </div>
      )
    }
}

export default SignUp;