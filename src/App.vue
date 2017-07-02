<template>
	<div>
		<hc-house house-id="0"></hc-house>
		<footer>
			<hc-menu></hc-menu>
		</footer>
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import HouseHub from './components/House/HouseHub.vue'

export default {
  name: 'app',
  components: {
  	'hc-menu': Menu,
  	'hc-house': HouseHub
  },
  data () {
    return {
    }
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
