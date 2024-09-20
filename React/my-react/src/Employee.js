import { React, Component } from "react";

class Employee extends Component {
  render() {
    return (
      <>
        <h2>This is Employee Class Component</h2>
        /**JSON.stringify will convert objects into string data type**/
        <pre>{JSON.stringify(this.props.user)}</pre>
        <h4>Employee Id: {this.props.user.id}</h4>
        <h4>Employee Name: {this.props.user.name}</h4>
        <h4>Employee Email: {this.props.user.email}</h4>
        <h4>Message: {this.props.message}</h4>
      </>
    );
  }
}

export default Employee;