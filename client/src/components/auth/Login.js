import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// inspiration: https://aspire.app/

const Login = ({ login, isAuthenticated }) => {
  // Component State Hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // The ...formData is a spreader and copies the formData
  // [e.target.name] corresponding to "name" attribute (not the value) of each HTML tags
  // e.target.value -- is the change in value in the fields


  //Subit function form
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password); // action to reducer
  };

  //Redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Redirect to='dashboard' />;
  }

  return (
    <div className='loginbg mt-10 pt-10 md:pt-10'>
      <div className=' bg-gray-200 mx-auto text-black rounded-3xl shadow-xl w-11/12 md:w-1/2 overflow-hidden'>
        <div className='w-full md:w-full py-10 px-5 md:px-10'>
          <div className='text-center mb-2'>
            <h1 className='font-bold text-3xl text-indigo-800 mb-3'>LOG IN</h1>
            <p>Welcome back! Log in to your account here.</p>
          </div>
          <div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label for='' className='text-xs font-semibold px-1'>
                    Login Email
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                    </div>
                    <input
                      type='email'
                      className='w-full -ml-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                      placeholder='yourlogin@email.com'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-8'>
                  <label for='' className='text-xs font-semibold px-1'>
                    Password
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      type='password'
                      className='w-full -ml-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                      placeholder='************'
                      name='password'
                      value={password}
                      onChange={(e) => onChange(e)}
                      minLength='6'
                    />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <input
                    type='submit'
                    className='block w-full max-w-xs mx-auto cursor-pointer bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg p-1 font-semibold'
                    value='LOG IN'
                  />
                </div>
              </div>
              {/*  */}
            </form>
            <div className='flex justify-center items-center text-sm font-semibold gap-x-3 text-center mb-3'>
              {' '}
              <hr className='border-1 border-gray-400 w-40' /> OR
              <hr className='border-1 border-gray-400 w-40' />
            </div>
            <p className='text-sm text-center flex justify-center gap-x-1'>
              Don't have an account yet?{' '}
              <Link to='/register'>
                {' '}
                <p className='text-indigo-500'>Sign up for free</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proptypes are there to tell other developers what kind of props are used in this component
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

