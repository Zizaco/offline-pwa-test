<template>
  <div>
    <hc-house-header></hc-house-header>

    <hc-floating-button></hc-floating-button>

    <div class="container">
      <div class="columns is-mobile">
        <div v-for="room in roomsOf()" class="column is-one-quarter">
          <div class="has-text-centered">
            <div>
              <span class="icon"><i :class="['fa', room.icon]"></i></span>
            </div>
            <p>{{ room.name }}</p>
          </div>
        </div>
      </div>

      <div v-for="level in levels">
        <h2 class="subtitle is-primary">{{ level }}</h2>
        <div class="columns is-mobile">
          <div v-for="room in roomsOf(level)" class="column is-one-quarter">
            <div class="has-text-centered">
              <div>
                <span class="icon"><i :class="['fa', room.icon]"></i></span>
              </div>
              <p>{{ room.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import House from './house'
import HouseHeader from './HouseHeader.vue'
import FloatingButton from './../FloatingButton.vue'

export default {
  name: 'hc-house',
  props: ['house-id'],
  components: {
    'hc-house-header': HouseHeader,
    'hc-floating-button': FloatingButton
  },

  data () {
    return {
      house: new House
    }
  },

  computed: {
    levels() {
      return this.house.levels
    }
  },

  methods: {
    roomsOf(level = null) {
      return this.house.rooms.filter((r) => r.level == level);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 15px;
}

.subtitle.is-primary {
  color: #00d1b2;
}
</style>
