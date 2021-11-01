import React from 'react'

class Button extends React.Component {
  render() {
    const { type, label } = this.props

    return (
      <button className="btn btn-primary" type={type}>
        {label}
      </button>
    )
  }
}

export default Button