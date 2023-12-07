import React, { Fragment } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../actions/workout';
import { DateTime } from 'luxon';

const Workout = ({ workouts, deleteWorkout, setWorkoutId, showModal }) => {
  const handleClick = (id) => {
    setWorkoutId(id);
    showModal(true);
  };

  const workoutList = workouts.map((workout) => (
    <tr key={workout._id} class='bg-white shadow-lg'>
      <td class='p-1'>
        <div class='flex align-items-center'>
          <div class='ml-3'>
            <div class=''>{workout.workoutName}</div>
          </div>
        </div>
      </td>
      <td class='p-1'>
        {DateTime.fromISO(workout.date).toLocaleString(DateTime.DATE_HUGE)}
      </td>
      <td class='p-1 font-bold'>
        {workout.exercise.slice(0, 2).map((item) => (
          <Fragment>{item.name}, </Fragment>
        ))}{' '}
        etc...
      </td>
      <td class='p-1'>
        <span
          className={
            'text-gray-50 rounded-md px-2 ' +
            (workout.exercise.length < 3 ? 'bg-red-400' : 'bg-green-400')
          }
        >
          {workout.exercise.length}
        </span>
      </td>
      <td class='p-0 md:space-y-0 justify-center align-items space-x-5'>
        <button
          onClick={() => handleClick(workout._id)}
          class='text-gray-400 hover:text-gray-600 mr-1'
        >
          <i class='material-icons-outlined text-base'>visibility</i>
        </button>
        <button
          onClick={() => deleteWorkout(workout._id)}
          class='text-red-400 hover:text-red-600  ml-1'
        >
          <i class='material-icons-round text-base'>delete_outline</i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div class='mt-2 w-full col-span-12'>
      <div class='overflow-auto lg:overflow-visible '>
        <table class='table w-full text-gray-400 border-separate space-y-6 text-sm'>
          <thead class='bg-white shadow-lg text-gray-500'>
            <tr className='text-indigo-600'>
              <th class='p-1'>Workout</th>
              <th class='p-1 text-left'>Date</th>
              <th class='p-1 text-left'>Exercises</th>
              <th class='p-1 text-left'>Status</th>
              <th class='p-1 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>{workoutList}</tbody>
        </table>
      </div>
    </div>
  );
};

Workout.propTypes = {
  deleteWorkout: PropTypes.func.isRequired,
  workouts: PropTypes.array.isRequired,
};

export default connect(null, { deleteWorkout })(Workout);
