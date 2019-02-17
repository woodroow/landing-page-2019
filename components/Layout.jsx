import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const Layout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
`;

export default ({ children }: Props) => (
  <Layout>
    {children}
  </Layout>
);
