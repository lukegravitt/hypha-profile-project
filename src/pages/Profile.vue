<script>
export default {
  name: 'page-profile',
  components: {
    PersonalInfo: () => import('../components/personal-info-widget.vue')
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<template lang="pug">
q-page.page-profile
  PersonalInfo
</template>
