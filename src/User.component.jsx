import { Component } from "react";

class User extends Component {
  constructor(props) {
    super();
    this.state = {
      fName: "NO NAME",
      lName: "balacho",
      age: 25,
      email: "yosi@gmail.com",
      password: "ag3223",
    };
    this.printOnScreen = this.printOnScreen.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }
  nameChange() {
    console.log("yosi");
    this.setState({ fName: "yosi" });
  }

  getUserFirstName(e) {
    this.setState({ fName: e.target.value });
  }
  getUserLastName(e) {
    this.setState({ lName: e.target.value });
  }
  getUserAge(e) {
    this.setState({ age: e.target.value });
  }
  getUserEmail(e) {
    this.setState({ email: e.target.value });
  }
  getUserPassword(e) {
    this.setState({ password: e.target.value });
  }
  displayOnFormSubmit(e){
    e.preventDefault()
}
  printOnScreen() {
    return (
      <table>
        <thead>
          <th>first name</th>
          <th>last name</th>
          <th> age</th>
          <th> email</th>
          <th>password</th>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.fName}</td>
            <td>{this.state.lName}</td>
            <td>{this.state.age}</td>
            <td>{this.state.email}</td>
            <td>{this.state.password}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div>
        <h1>{this.state.fName}</h1>
        <button onClick={this.nameChange}>click</button>
        <form onSubmit={(e)=>this.displayOnFormSubmit(e)}>
          <input
            onChange={(e) => this.getUserFirstName(e)}
            type="text"
            value={this.state.fName}
          />
          <input
            onChange={(e) => this.getUserLastName(e)}
            type="text"
            value={this.state.lName}
          />
          <input
            onChange={(e) => this.getUserAge(e)}
            type="text"
            value={this.state.age}
          />
          <input
             onChange={(e) => this.getUserEmail(e)}
          type="text" value={this.state.email} />
          <input
             onChange={(e) => this.getUserPassword(e)}
          type="text" value={this.state.password} />
           <button>submit</button>
        </form>
        <div>{this.nameChange}</div>
      </div>
    );
  }
}
export default User;
