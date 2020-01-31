<template>
  <div>
    <section class="has-bg-img">
      <div class="hero">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.has-bg-img {
  background: url('/img/background.jpeg') center center;
  background-size: cover;
}
.hero {
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
