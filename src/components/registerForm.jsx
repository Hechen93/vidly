import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  state = {
    data: { email: '', password: '', name: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email Address'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Full Name'),
  };

  doSubmit = () => {
    //Call the server
    console.log('Registered');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email Address')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Full Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
