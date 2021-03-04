<script>
export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      text: ''
    }
  }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header
      .row.no-wrap
        q-toolbar.col-4.bg-white.text-black
          q-btn(flat round dense icon="fas fa-bars" size="xs")
        q-toolbar.col-4.bg-white
          .row.q-mx-auto.items-center
            q-avatar
              img(src="~assets/logo/hypha72x72.png")
            q-toolbar-title.hypha-title Hypha DHO
        q-toolbar.col-4.bg-white
          q-space
          q-input(dense v-model="text" input-class="text-right").q-px-md
            template(v-slot:append)
              q-icon.search-icon(v-if="text === ''" name="fas fa-search" size="xs")
              q-icon.search-icon(v-else name="fas fa-times-circle" size="xs" @click="text = ''")
          q-avatar(size="md")
            img(src="~assets/avatar-placeholder.png")

    q-page-container.page-background
      router-view
</template>

<style lang="stylus" scoped>
.hypha-title
  color #7C9CBF

.page-background
  background-color #EBF4F8

.search-icon
  color #0880AE
</style>
