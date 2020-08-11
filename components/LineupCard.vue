<template>
  <nuxt-link :to="'/lineup/' + lineup.id">
    <div class="-shadow">
      <span class="eyebrow"> @{{ lineup.time }} on {{ parsedDate }} </span>
      <h4 class="title">
        {{ lineup.title }}
      </h4>
      <span>{{ lineup.attendees.length }} attending</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'LineupCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    lineup: Object,
  },
  computed: {
    parsedDate() {
      const lineupDate = new Date(this.lineup.date)
      return lineupDate.toDateString()
    },
  },
}
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
