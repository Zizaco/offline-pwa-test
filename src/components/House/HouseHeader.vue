<template>
	<header>
		<nav class="nav">
			<div class="nav-left">
				<div class="nav-item">
					<span class="icon"><i class="fa fa-file-text-o"></i></span>
				</div>
			</div>
			<div class="nav-center">
				<div class="nav-item">
					Mon Appartement
				</div>
			</div>
			<div class="nav-right">
				<div class="nav-item">
					<span class="icon"><i class="fa fa-envelope-o"></i></span>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'hc-house-header'
}
</script>

<style lang="scss" scoped>
nav {
	position: absolute;
	width: 100%;
	top: 0;
	background-color: #00d1b2;
	color: #fff;
}
</style>
