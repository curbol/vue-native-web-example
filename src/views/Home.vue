<template web>
  <div class="w-page">
    <div class="w-container">
      <h1>{{ navbarTitle }}</h1>
      <img src="~/assets/logo.png" alt="logo" />
      <HelloWorld :msg="msg" />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <GridLayout rows="auto, auto">
      <!-- copy-webpack-plugin copies asset from src/assets to project output/build directory /assets -->
      <Image src="~/assets/logo.png" row="0" class="m-20" />
      <HelloWorld :msg="msg" row="1" />
    </GridLayout>
  </Page>
</template>

<script>
import HelloWorld from 'components/HelloWorld'

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      navbarTitle: `Citizen Access - Web and Mobile!`,
      msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
    }
  }
}
</script>

<style scoped>
@import '~styles/style-one';
@import '~styles/style-two';

img,
image {
  height: 20%;
  width: 20%;
  display: block;
  margin: auto;
  margin-top: 4em;
}
</style>
