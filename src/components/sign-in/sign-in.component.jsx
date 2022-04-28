import React from "react";
import './sign-in.style.scss';

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
                <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required
                />
                <label>Email</label>
                <input name="password" type="password" value={this.state.password} required
                onChange={this.handleChange}/>
                <label>Password</label>
                <input type="submit" value="Submit Form"/>
            </form>     
         </div>
     )     
 }
}

export default SIgnIn;