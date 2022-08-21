import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state={counter:+props.counter}
    this.counterUp=this.counterUp.bind(this)
    this.counterDown=this.counterDown.bind(this)
    this.restart=this.restart.bind(this)
  }

  counterUp(){
    this.state.counter % 7 === 0 ? this.setState({counter:"Boom"}) : this.setState({counter: this.state.counter+1})

    }
  
  counterDown(){
    this.setState({counter:this.state.counter-1})
  }
  restart(){
    this.setState({counter:0})
  }
  render() {
    return(
        <div>
            <h1>{this.state.counter} </h1>
            <button onClick={this.counterUp}>click+</button>
            <button onClick={this.counterDown}>click-</button>
            <button onClick={this.restart}>reset</button>
        </div>
    )
  }
}
export default Counter 