<template native>
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <StackLayout row="0" class="nt-drawer__header">
      <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"></Image>
      <Label class="nt-drawer__header-brand" text="User Name"></Label>
      <Label class="nt-drawer__header-footnote" text="username@mail.com"></Label>
    </StackLayout>

    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <GridLayout
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected' : '')"
          @tap="onNavigationItemTap(Home)"
        >
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
          <Label col="1" text="Home" class="p-r-10"></Label>
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'About' ? ' -selected' : '')"
          @tap="onNavigationItemTap(About)"
        >
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"></Label>
          <Label col="1" text="About" class="p-r-10"></Label>
        </GridLayout>

        <StackLayout class="hr"></StackLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import Home from '~/views/Home'
import About from '~/views/About'
import * as utils from '~/shared/utils'
import SelectedPageService from '~/shared/selected-page-service'

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      selectedPage => (this.selectedPage = selectedPage)
    )
  },
  data() {
    return {
      Home: Home,
      About: About,
      selectedPage: ''
    }
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      })
      utils.closeDrawer()
    }
  }
}
</script>

<style scoped lang="scss">
@import '~styles/style-one';
@import '~styles/style-two';
</style>
