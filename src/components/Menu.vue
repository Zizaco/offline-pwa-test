<template>
	<section>
		<nav class="nav">
			<router-link class="nav-item is-tab" to="/journal">
				<span class="icon"><i class="fa fa-book"></i></span>
			</router-link>
			<router-link class="nav-item is-tab" to="/home">
				<span class="icon"><i class="fa fa-home"></i></span>
			</router-link>
			<router-link class="nav-item is-tab" to="/documents">
				<span class="icon"><i class="fa fa-file-text"></i></span>
			</router-link>
			<router-link class="nav-item is-tab" to="/contacts">
				<span class="icon"><i class="fa fa-address-card-o"></i></span>
			</router-link>
		</nav>
	</section>
</template>

<script>
export default {
  name: 'hc-menu',
}
</script>

<style lang="scss" scoped>
.nav {
	background-color: #eee;
}
.nav-item {
	width: 25%;
	span {
		width: 100%
	}
}
</style>
