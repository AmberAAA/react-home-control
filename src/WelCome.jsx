import React from 'react'

class WelCome extends React.Component{
  timer = null
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      name: 'Amber'
    }
  }

  click() {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.timer = setInterval(() => { this.click() },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <h1>你好！{this.props.name}</h1>
        <h2>现在是 {this.state.date.toLocaleString()}</h2>
      </div>
    )
  }
}

export default WelCome
