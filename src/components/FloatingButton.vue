<template>
	<div class="floating-button-container">
		<button class="button is-primary">
			+
		</button>
	</div>
</template>

<script>
export default {
	name: 'hc-floating-button'
}
</script>

<style lang="scss">
.floating-button-container {
	position: absolute;
	bottom: 80px;
	right: 24px;

	button,.button {
		border-radius: 100%;
		height: 60px;
		width: 60px;
		font-size: 26px;
		box-shadow: 0 4px 6px rgba(0,0,0,.15);
		outline:none;
		
		&:-moz-focus-inner {
		   border: 0;
		}
	}
}
</style>