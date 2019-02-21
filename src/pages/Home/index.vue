<template>
  <div>
    hello {{ message }}
    <button @click="handleClick">
      click
    </button>
    <hr>
    <router-link :to="{ name: 'children' }">
      Home Children
    </router-link>
    <router-view />
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
