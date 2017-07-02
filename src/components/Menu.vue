<template>
	<section>
		<nav class="nav">
			<a class="nav-item is-tab">
				<span class="icon"><i class="fa fa-book"></i></span>
			</a>
			<a class="nav-item is-tab is-active">
				<span class="icon"><i class="fa fa-home"></i></span>
			</a>
			<a class="nav-item is-tab">
				<span class="icon"><i class="fa fa-file-text"></i></span>
			</a>
			<a class="nav-item is-tab">
				<span class="icon"><i class="fa fa-address-card-o"></i></span>
			</a>
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
