import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const PageNotFound = () => {
  return (
    <Layout title="error">
      <h1>Page not found</h1>
      <Link to="/">Go back to home?</Link>
    </Layout>
  );
};

export default PageNotFound;
