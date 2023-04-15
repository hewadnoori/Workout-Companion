import axios from 'axios';

export default {
  getWorkoutByUserId(userId) {
    return axios.get(`/workouts/getUserWorkout/${userId}`);
  },
  getUpcomingGymClass(){
    return axios.get('/workouts/gymclass');
  }
};