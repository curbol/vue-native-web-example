<template web>
  <div class="w-page">
    <div class="w-container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h1>{{ navbarTitle }}</h1>
      <img src="~/assets/logo.png" alt="logo" height="20%" width="20%" />
      <HelloWorld :msg="msg" />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <StackLayout>
      <StackLayout>
        <Button text="About" @tap="$navigateTo(pages.About)" />
      </StackLayout>
      <GridLayout rows="auto, auto">
        <HelloWorld :msg="msg" />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
import About from '~/views/About'

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      pages: { About },
      navbarTitle: `Citizen Access`,
      msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
    }
  },
  methods: {}
}
</script>

<style web>
@import '~styles/style-one';

h1 {
  color: #42b983;
}
.w-page {
  height: 100%;
  width: 100%;
}
</style>

<style native>
@import '~styles/style-one';
</style>
