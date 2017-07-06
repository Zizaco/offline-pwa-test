<template>
  <transition name="fade">
    <div>
      <hc-house-header></hc-house-header>

      <hc-floating-button></hc-floating-button>

      <div class="container">
        <div class="columns is-mobile">
          <div v-for="room in roomsOf()" class="column is-one-quarter">
            <div @click="renameRoom(room)" class="has-text-centered">
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
              <div @click="renameRoom(room)" class="has-text-centered">
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
  </transition>
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
      house: House.findOrCreate(1)
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
    },

    renameRoom(room) {
      room.name = prompt('Rename room', room.name);
      this.house.save();
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 15px;
  position: absolute;
  width: 100%;
}

.subtitle.is-primary {
  color: #00d1b2;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
