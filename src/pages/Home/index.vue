<template>
  <div>
    hello {{ message }}
    <button @click="handleClick">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'walker'
    };
  },

  methods: {
    test() {
      return 1;
    },

    handleClick() {
      alert('clicked');
    }
  }
};
</script>
