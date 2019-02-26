import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    let formType;
    if (this.props.formType === 'login') {
      formType = 'signup';
    } else {
      formType = 'login';
    }

    let errors = this.props.errors.map(error => <li>{error}</li>);

    return (
      <div>
        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleSubmit}>
          Username:
          <br />
          <input type='text' value={this.state.username} onChange={this.update('username')} />
          <br />

          Password:
          <br />
          <input type='password' value={this.state.password} onChange={this.update('password')} />
          
          <br />
          <input type='submit' value={this.props.formType} />
        </form>

        {/* <p>{this.props.errors[0]}</p> */}
        <br />
        
        <ul>
          { errors }
        </ul>

        <Link to={`/${formType}`}>{formType}</Link>
        
      </div>
    )
  }
}

export default SessionForm;