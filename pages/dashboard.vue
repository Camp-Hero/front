<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      {{ camping.title }}
    </h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      camping: {
        title: 'Camping des flots bleus'
      }
    }
  }
}
</script>
