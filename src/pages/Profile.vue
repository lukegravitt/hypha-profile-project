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
q-page.page-profile(padding)
  .row.justify-center
    .profile-detail-pane.q-mx-sm
      PersonalInfo.q-my-md
      q-card(flat).q-my-md.q-pa-lg
        .text-h5.text-bold.q-pt-md About
        .text-body2.q-mt-md.q-mb-lg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dui risus. Nullam pharetra, mauris in ultrices fringilla, metus ante suscipit urna, eget scelerisque ex neque a est. Donec turpis nisi, consectetur vitae efficitur quis, lobortis non libero. Etiam sed magna sed mi commodo commodo a ut eros. Quisque tortor justo, iaculis imperdiet porta non, rutrum commodo nisl. Proin rhoncus dui lectus, at pharetra nisl pulvinar ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut urna a nisl semper elementum sed semper mi. In sit amet accumsan urna, quis tempus lorem.
    .profile-active-pane.q-mx-sm
      q-card(flat).q-my-md
        q-card-section
          .welcome-text.text-subtitle1 Welcome
          .propose-text.text-h3.text-bold How to Propose
          .tutorial-text.text-subtitle1.text-bold Tutorial
          q-btn(color="primary").q-my-lg Propose
      q-card(flat).q-my-md
        q-card-section.reserve-height
          .text-h5.text-bold.q-pa-md My open proposals
      q-card(flat).q-my-md
        q-card-section.reserve-height
          .text-h5.text-bold.q-pa-md My active assignments
      q-card(flat).q-my-md
        q-card-section.reserve-height
          .text-h5.text-bold.q-pa-md My achievement history
    .profile-past-pane.q-mx-sm
      q-card(flat).q-my-md
        q-card-section
          .text-h5.text-bold.q-pa-md My voting history
          q-list
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Max voted "Yes" on Contribution "Push Notification"
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold You voted "No" on Quest "Party"
                q-item-label.caption Oct 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold You voted "No" on Contribtion "yyyxxx"
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Max voted "No" on Contribution "Push Notification"
                q-item-label.caption Sep 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Max voted "No" on Contribution "Push Notification"
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
        q-card-actions(vertical)
          q-btn(flat).more-button MORE

      q-card(flat).q-my-md
        q-card-section
          .text-h5.text-bold.q-pa-md My transactions
          q-list
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Payment for Role: 38 Assignment ID: 2
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Payment for Role: 38 Assignment ID: 2
                q-item-label.caption Oct 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Payment for Role: 38 Assignment ID: 2
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Payment for Role: 38 Assignment ID: 2
                q-item-label.caption Sep 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
            q-separator(spaced inset)
            q-item(clickable v-ripple).vote-history-item
              q-item-section
                q-item-label.text-body1.text-bold Payment for Role: 38 Assignment ID: 2
                q-item-label.caption Nov 20, 2020
              q-item-section(side)
                q-icon(name="fas fa-chevron-right")
        q-card-actions(vertical)
          q-btn(flat).more-button MORE
</template>

<style lang="stylus" scoped>
.page-profile

  .profile-detail-pane
    max-width 400px

  .profile-active-pane
    width 800px

    .welcome-text
      color #728191
      margin-top 50px
      margin-bottom 20px

    .tutorial-text
      margin-top 20px

    .reserve-height
      min-height 450px

  .profile-past-pane
    max-width 400px

    .vote-history-item
      color #728191

    .more-button
      color #0880AE
</style>
