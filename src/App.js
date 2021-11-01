import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from "./components/Button"
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
        <h1 className="text-center p-3">Login</h1>
        {this.state.isSubmitted ? <Success email={this.state.email} /> :

          <form onSubmit={this.handleSubmit}>
            
            <Input label="Firstname" type="text" placeholder="Enter firstname" className="form-control mb-3" onChange={this.handleFirstNameChange} />

            <Input label="Lastname" type="text" placeholder="Enter lastname" className="form-control mb-3" onChange={this.handleLastNameChange} />

            <Input label="Email address" type="email" placeholder="Enter email" className="form-control mb-3" onChange={this.handleEmailChange} />

            <Input label="Password" type="password" placeholder="Password" className="form-control mb-3" onChange={this.handlePasswordChange} />

            <Input type="checkbox" className="mb-3" onChange={this.handleRememberMeChange} />

            <Button  type="submit" label="Submit" />
          </form>
        }
      </div>
    )
  }
}

export default App
