<template web>
  <div class="w-page">
    <div class="w-container">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <GridLayout>
      <Label
        class="about-text"
        :text="text"
        textWrap="true"
        horizontalAlignment="center"
        verticalAlignment="center"
      />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      navbarTitle: `Citizen Access - About`,
      text: `This is a prototype Citizen Access mobile+web app.`
    }
  }
}
</script>

<style scoped>
@import '~styles/style-two';
@import '~styles/style-one';

.about-text {
  font-weight: bold;
  padding: 50px;
}
</style>
