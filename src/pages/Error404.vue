<script>
export default {
  name: 'page-error404'
}
</script>

<template lang="pug">
  .fixed-center.text-center
    p.text-faded Sorry, nothing here...<strong>(404)</strong>
    q-btn(
      color="secondary"
      style="width:200px;"
      @click="$router.go(-1)"
      label="Go back"
    )
</template>
