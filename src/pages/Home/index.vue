<template>
  <div>
    hello {{ message }}
    <button @click="handleClick">
      click
    </button>
    <ul>
      <li
        v-for="item in newsList"
        :key="item.id"
      >
        {{ item.id }} - {{ item.title }}
      </li>
    </ul>
    <hr>
    <router-link :to="{ name: 'children' }">
      Home Children
    </router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    newsList() {
      return this.$store.getters.newsList;
    }
  },

  data() {
    return {
      message: 'walker'
    };
  },

  mounted() {
    console.log('home mounted');
    if (!this.newsList.length) {
      this.$store.dispatch('fetchNewsList');
      console.log('client render');
    }
  },

  methods: {
    test() {
      return 1;
    },

    handleClick() {
      alert('clicked');
    }
  },

  loadData({ store }) {
    return store.dispatch('fetchNewsList');
  }
};
</script>
