import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register, login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, login, isAuthenticated }) => {
  // Component State Hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // The ...formData is a spreader and copies the formData
  // [e.target.name] corresponding to "name" attribute (not the value) of each HTML tags
  // e.target.value -- is the change in value in the fields


  //Subit function form - we use the "register" action here that will send to the reducer
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };


  // Redirect to dashboard

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='signupbg mt-16 pt-16 md:pt-10'>
      <div className='bg-gray-200 -mt-10 md:-mt-4 text-gray-900 rounded-3xl mx-auto shadow-xl w-11/12 md:w-1/2 overflow-hidden'>
        <div className='w-full py-5 px-5 md:px-10'>
          <div className='text-center mb-5'>
            <h1 className='font-bold text-3xl text-indigo-800'>SIGN UP</h1>
            <p>Enter the information below to create your own account</p>
          </div>
          <div>
            {/* dfsdfd */}
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label for='' className='text-xs font-semibold px-1'>
                    Name
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      type='text'
                      className='w-full -ml-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label for='' className='text-xs font-semibold px-1'>
                    Email
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      type='email'
                      className='w-full -ml-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                      placeholder='your@email.com'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-1/2 px-3 mb-12'>
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
                <div className='w-1/2 px-3 mb-12'>
                  <label for='' className='text-xs font-semibold px-1'>
                    Confirm Password
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      type='password'
                      className='w-full -ml-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                      placeholder='************'
                      name='password2'
                      value={password2}
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
                    value='REGISTER NOW'
                  />
                </div>
              </div>
              {/*  */}
            </form>
            <p className='text-sm text-center flex justify-center gap-x-1'>
              Already have an account?{' '}
              <Link to='/login'>
                {' '}
                <p className='text-indigo-600'>Log In</p>
              </Link>{' '}
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register, login })(
  Register
);

