import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      project: "",
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeProject = this.handleChangeProject.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  
  render() {
    return (
      <>
        <div>
          <form >
            <input type="text" name="firstName" onChange={this.handleChange} />
            <input type="text" name="lastName" onChange={this.handleChange} />
            <input type="email" name="email" onChange={this.handleChange} />
            <input type="text" name="project" onChange={this.handleChange} />
            <button>Submit </button>
          </form>
        </div>
      </>
    );
  }
}


