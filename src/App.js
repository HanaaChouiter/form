import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from "react-bootstrap/Button"
import Input from "./components/Input"
import Success from "./components/Sucess";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleEmailChange(e) {

    this.setState({ email: e.target.value })

    let regex = /[\w.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (regex.test(e.target.value)) {
      e.target.className = 'form-control is-valid'
      this.setState({ emailIsValid: true })
    } else {
      e.target.className = 'form-control is-invalid'
      this.setState({ emailIsValid: false })
    }
  }

  handlePasswordChange(e) {
    console.log(this.state)
    this.setState({ password: e.target.value })
    if (e.target.value.length > 5) {
      e.target.className = 'form-control is-valid'
      this.setState({ passwordIsValid: true })
    } else {
      e.target.className = 'form-control is-invalid'
      this.setState({ passwordIsValid: false })
    }
  }

  handleRememberMeChange() {
    // console.log(this.state)
    this.state.rememberMe ? this.setState({ rememberMe: false }) : this.setState({ rememberMe: true })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true })
    }
  }


  render() {
    
    return (
    <div className="container">
        <h1>Login</h1>
        {this.state.isSubmitted ? <Success email={this.state.email} /> :

          <form onSubmit={this.handleSubmit}>

            <label>firstName</label>
            <Input type="text" placeholder="Enter firstName" className="form-control" onChange={this.handleFirstNameChange} />

            <label>lastName</label>
            <Input type="text" placeholder="Enter lastName" className="form-control" onChange={this.handleLastNameChange} />

            <label>Email address</label>
            <Input type="email" placeholder="Enter email" className="form-control" onChange={this.handleEmailChange} />

            <label>Password</label>
            <Input type="password" placeholder="Password" className="form-control" onChange={this.handlePasswordChange} />

            <Input type="checkbox" label="remember me" onChange={this.handleRememberMeChange} />

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </form>
        }
      </div>
    )
  }
}

export default App
