<template>
  <div>
    <div class="lineup-header">
      <span class="eyebrow"> @{{ lineup.time }} on {{ lineup.date }} </span>
      <h1 class="title">
        {{ lineup.title }}
      </h1>
      <h5>Organized by {{ lineup.organizer ? lineup.organizer.name : '' }}</h5>
      <h5>Category: {{ lineup.category }}</h5>
    </div>

    <span name="map">
      <h2>Location</h2>
    </span>

    <address>{{ lineup.location }}</address>

    <h2>Lineup details</h2>
    <p>{{ lineup.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ lineup.attendees ? lineup.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in lineup.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('lineups/fetchLineup', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch lineup #' + params.id,
      })
    }
  },
  computed: mapState({
    lineup: (state) => state.lineups.lineup,
  }),
  head() {
    return {
      title: this.lineup.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here are the details about lineup #' + this.lineup.title,
        },
      ],
    }
  },
}
</script>

<style scoped>
.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
