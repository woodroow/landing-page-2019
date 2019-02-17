import React, { Component } from 'react';
import Layout from '../components/Layout';
import Text from '../components/Text';

class app extends Component {
  static async getInitialProps() {
    const { NODE_ENV } = process.env;
    console.log(NODE_ENV);
    return true;
  }

  render() {
    return (
      <Layout>
        <Text text='hello world' />
      </Layout>
    );
  }
}
  
export default app;
