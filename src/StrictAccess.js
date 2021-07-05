import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    if (username === 'joao' && password === '1234') return <p>Weolcome joao!</p>;
    alert('Access denied');
    return <Redirect to="/" />
  }
}