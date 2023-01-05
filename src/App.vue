<script setup lang="ts">
import EditingArea from "./components/EditingArea.vue";
import MainArea from "./components/MainArea.vue";
</script>

<script lang="ts">
import { fullscreenStore } from "./stores";

export default {
	data() {
		return {
			store: fullscreenStore
		}
	},
	mounted() {
		this.store.toggle();
	}
}
</script>

<template>
<div :data-fullscreen="store.fullscreen">
	<EditingArea />
	<MainArea />
</div>
</template>

<style lang="scss">
div {
	width: 100%;
	height: 100%;

	display: flex;
	padding: 1rem;
	gap: 1rem;

	transition: gap 700ms ease-in-out;
}

div[data-fullscreen="true"] {
	gap: 0;
}
</style>
