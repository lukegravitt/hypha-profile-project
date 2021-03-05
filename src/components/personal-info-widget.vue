<script>
export default {
  name: 'personal-info-widget'
}
</script>

<template lang="pug">
q-card(flat).personal-info-widget
  q-avatar.avatar-large(size="320px")
    img(src="~assets/avatar-placeholder.png")
  .profile-header.text-center.text-bold
    .profile-name.text-h5.text-bold Luke Gravitt
    .profile-account.text-subtitle1 lukegravdent@
    .profile-hashtags.text-body2 #developer #frontend #ux #longnamethatoverflows
  .profile-details.text-subtitle1.text-bold.q-py-md
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="far fa-user")
      .detail-text.q-px-sm H Voice: XXX
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="far fa-user")
      .detail-text.q-px-sm Joined Dec 1, 2020
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="fas fa-map-marker-alt")
      .detail-text.q-px-sm Location (GMT +6)

    .detail-header.q-pt-md.q-px-lg When to reach me best:
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="far fa-clock")
      .detail-text.q-px-sm Timezone1: GMT+6 8am - 1pm
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="far fa-clock")
      .detail-text.q-px-sm Timezone1: GMT+6 5pm - 9pm

    .detail-header.q-pt-md.q-px-lg How to reach me best:
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="fas fa-link")
      .detail-text.q-px-sm Discord #12345
    .row.q-px-lg.items-center
      q-icon.detail-icon(name="fas fa-paper-plane")
      .detail-text.q-px-sm Telegram
</template>

<style lang="stylus" scoped>
.personal-info-widget
  padding-bottom 16px
  max-width 400px

  .avatar-large
    margin 40px

  .profile-header
    margin-left 40px
    margin-right 40px
    color #2C2738

  .profile-details
    margin-top 20px

    .detail-header
      color black
    .detail-icon
      color #0880AE
    .detail-text
      color #728191
</style>
