<template web>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<template native>
  <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true">
    <StackLayout ~drawerContent backgroundColor="#eeffee">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <slot name="mainContent"></slot>
    </Frame>
  </RadSideDrawer>
</template>

<script>
// import Home from '~/views/Home'
import About from '~/views/About'

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env

export default {
  components: {
    // Home
  },
  data() {
    return {
      pages: { About },
      navbarTitle: `Citizen Access`,
      msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
    }
  },
  methods: {
    goTo(page) {
      this.$navigateTo(page, { frame: 'main' })
    }
  }
}
</script>

<style web lang="scss">
@import '~styles/style-one';

h1 {
  color: #42b983;
}
.w-page {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style native>
@import '~styles/style-one';
@import '~styles/style-two';
</style>
