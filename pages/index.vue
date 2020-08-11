<template>
  <div>
    <h1>Lineups</h1>
    <LineupCard
      v-for="(lineup, index) in lineups"
      :key="index"
      :lineup="lineup"
      :data-index="index"
    />
  </div>
</template>
<script>
import LineupCard from '@/components/LineupCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LineupCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('lineups/fetchLineups')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  computed: mapState({
    lineups: (state) => state.lineups.lineups,
  }),
  head() {
    return {
      title: 'Generate Lineup',
    }
  },
}
</script>
