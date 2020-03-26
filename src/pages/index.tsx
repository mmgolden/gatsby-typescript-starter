import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
);

export default IndexPage;
