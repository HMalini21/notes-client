import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Login from '../components/LoginForm/Login';

const FormPage = () => {
  return (
    <Layout title="Form">
      <Login />
      <Link to="/">Go back to home?</Link>
    </Layout>
  );
};

export default FormPage;
