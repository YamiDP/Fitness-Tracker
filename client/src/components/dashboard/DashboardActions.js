import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const DashboardActions = ({ logout }) => {
  return (
    <div class='py-12 px-7 w-1/5 hidden mr-1 md:flex md:flex-col bg-gray-900'>
      <Link
        to='/add-workout'
        class='flex items-center space-x-2 mt-6 p-1 bg-indigo-600 rounded-md'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <p class='text-md text-white font-semibold'>New Workout</p>
      </Link>
      <div class='mt-8'>
        <ul class='space-y-10'>
          <li>
            <Link
              to='/dashboard'
              class='flex items-center text-sm font-semibold text-gray-300 hover:text-indigo-400 transition duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6 mr-4 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
              </svg>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div class=''>
        <a
          onClick={logout}
          // href='#'
          class='flex mt-20 space-x-4 items-center font-semibold text-gray-300 hover:text-indigo-400 transition duration-200 cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
          <p>Logout</p>
        </a>
      </div>
    </div>
  );
};

DashboardActions.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(DashboardActions);
