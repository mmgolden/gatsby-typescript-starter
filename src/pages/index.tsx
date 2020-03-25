import React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
);

export default IndexPage;
