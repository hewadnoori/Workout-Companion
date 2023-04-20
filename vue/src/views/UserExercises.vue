<template>
  <div>
    <UserExercise :userId="parsedUserId"/>
    <UserCreateExercise :userId="parsedUserId" @exercise-created="refreshExercises"/>
  </div>
</template>

<script>
import UserExercise from '../components/UserExercise.vue';
import UserCreateExercise from '../components/UserCreateExercise.vue';

export default {
  name: "UserExercises",
  components: {
    UserExercise,
    UserCreateExercise,
  },
  props: {
    userId: {
      type: [Number, String], // Allow both Number and String types
      required: true,
    }
  },
  computed: {
    parsedUserId() {
      return parseInt(this.userId);
    }
  },
  methods: {
    refreshExercises() {
      this.$refs.UserExercise.refreshExercises();
    }
  }
};
</script>