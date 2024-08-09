import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Login from '../components/LoginForm/Login';
import Register from '../components/RegisterForm/Register';
import { useState } from 'react';

const FormPage = () => {
  const [currentForm, setCurrentForm] = useState('login');

  function toggleForm(formName) {
    setCurrentForm(formName);
  }
  return (
    <Layout title="Form">
      {currentForm === 'login' ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Register toggleForm={toggleForm} />
      )}
      <Link to="/">Go back to home?</Link>
    </Layout>
  );
};

export default FormPage;
