<template>
	<transition name="fade">
		<div>
			<hc-journal-header></hc-journal-header>

			<hc-floating-button></hc-floating-button>

			<div class="container">
				<div class="nav nav-center">
					<a class="nav-item is-tab is-active">
						<div class="has-text-centered">
							<div>
								<span class="icon"><i class="fa fa-calendar"></i></span>
							</div>
							<p>Agenda</p>
						</div>
					</a>
					<a class="nav-item is-tab">
						<div class="has-text-centered">
							<div>
								<span class="icon"><i class="fa fa-calendar-check-o"></i></span>
							</div>
							<p>Actualities</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import JournalHeader from './JournalHeader.vue';
import FloatingButton from './../FloatingButton.vue'

export default {
	name: 'hc-journal-hub',
	components: {
		'hc-journal-header': JournalHeader,
		'hc-floating-button': FloatingButton
	},
}
</script>

<style scoped>
.container {
  padding: 60px 15px;
  position: absolute;
  width: 100%;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>