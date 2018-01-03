import React, { Component } from 'react';
import apiCaller from '../lib/apiCaller';
import PageWrapper from '../components/PageWrapper';
export default class extends Component {
  static async getInitialProps() {
    const response = await apiCaller('https://uinames.com/api/?amount=25');
    const persons = await response;
    return { persons };
  }

  render() {
    const { persons } = this.props;
    return (
      <PageWrapper title="HOME">
        <h1> HOME</h1>
      </PageWrapper>
    );
  }
}
