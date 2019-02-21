<template>
  <div>
    hello {{ message }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'meet vue'
    };
  },

  methods: {
    test() {
      return 1;
    }
  }
};
</script>
