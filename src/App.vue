<template>
	<div>
		<router-view>
			<hc-house house-id="0"></hc-house>
		</router-view>
		<footer>
			<hc-menu></hc-menu>
		</footer>
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import HouseHub from './components/House/HouseHub.vue'
import Offline from './infrastructure/offline'

export default {
  name: 'app',
  components: {
  	'hc-menu': Menu,
  	'hc-house': HouseHub
  },
  data () {
    return {
    }
  },
  mounted() {
  	let offline = new Offline;

  	offline.initialize();
  }
}
</script>

<style lang="scss">
footer {
	position: absolute;
	width: 100%;
	bottom: 0;
}
</style>
