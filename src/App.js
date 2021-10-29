import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Input from "./components/Input"


class App extends React.Component {
  constructor(){
    super()
    
    this.state = {
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
    }

    this.handleEmailChange=this.handleEmailChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleRememberMeChange=this.handleRememberMeChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }


  handleEmailChange(e){

    this.setState({email : e.target.value})

    let regex = /[\w.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (regex.test(e.target.value)){
      console.log('ooga booga');
      e.target.className= 'form-control is-valid'
      this.setState({emailIsValid: true})
    }else {
      e.target.className= 'form-control is-invalid'
      this.setState({emailIsValid: false})
    }
  }

  handlePasswordChange(e){
    console.log(this.state)
    this.setState({password: e.target.value})
    if ( e.target.value.length > 5){
      this.setState({ passwordIsValid: true})
    }else {
      this.setState({ passwordIsValid: false})
    }
  }

  handleRememberMeChange(){
    // console.log(this.state)
    this.state.rememberMe  ? this.setState({rememberMe: false}) : this.setState({rememberMe: true})
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.state.emailIsValid && this.state.passwordIsValid){
      this.setState({isSubmitted: true})
    } 
    // let email = e.target.value
    // this.state.isSubmitted ? email :
  }



 

render(){
  return (
    <div className="container">
    <Form onSubmit={this.handleSubmit}>
    <Form className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Input type="email" placeholder="Enter email" className="form-control" onChange={this.handleEmailChange}/>
    </Form>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="remember me" onChange={this.handleRememberMeChange}/>
    </Form.Group>

    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  </div>
    )
  
}
}

export default App
