import { React, Component } from "react";
import Employee from "./Employee";

class User extends Component {
  message = "Good Morning";
  emp = { id: 102, name: "test", email: "test@gmail.com", sal: 50000 };

  render() {
    return (
      <>
        <h2>This is User Class Component</h2>
        <h3>Message: {this.message}</h3>
        <h3>Employee ID : {this.emp.id}</h3>
        <h3>Employee Name : {this.emp.name}</h3>
        <h3>Employee Email : {this.emp.email}</h3>
        <h3>Employee Salary : {this.emp.sal}</h3>
        <Employee user={this.emp} message={this.message} />
      </>
    );
  }
}

export default User;