import {React, Component} from 'react'
import FormInput from '../../reusableComponent/form-input'
import '../../styles/signin.scss'
import CustomButton from '../../reusableComponent/custom-button'

class SignIn extends Component{
     constructor(){
          super()
          this.state = {
               email: '',
               password: ''
          }
     }

     handleSubmit = (e) => {
          e.preventDefault()

          this.setState({email: '', password : ''})
     }

     handleChange = e => {
          const {name, value} = e.target
          this.setState({[name] : value})
          console.log(name)
     }

     render(){
          return (
               <div className = 'signin'>
                    <h2>Already have an account</h2>
                    <span>Sign in with email and password</span>

                    <form onSubmit={this.handleSubmit}>

                         <FormInput 
                              name = 'email'
                              type = 'email' 
                              label = 'EMAIL'
                              handleChange = {this.handleChange}
                              value = {this.state.email} required 
                         />

                         {/* <label>Email</label> */}

                         <FormInput 
                              name = 'password' 
                              label = 'PASSWORD'
                              onChange = {this.handleChange}
                              type = 'password' 
                              value = {this.state.password} required 
                         />

                         <CustomButton type = 'submit' value = "Submit" > Sign In</CustomButton>

                    </form>
               </div>
          )
     }
}

export default SignIn