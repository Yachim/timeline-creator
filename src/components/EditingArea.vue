<script lang="ts">
import { fullscreenStore } from "../stores";

export default {
	data() {
		return {
			store: fullscreenStore 
		}
	}
}
</script>

<template>
<aside :data-fullscreen="store.fullscreen">
</aside>
</template>

<style scoped lang="scss">
aside {
	position: relative;
	flex: 1;
	border-radius: 1rem;
	transition: flex 700ms ease-in-out;

	background-color: var(--bg-light-color);
	border-radius: 1rem;
}

aside[data-fullscreen="true"] {
	flex: 0
}
</style>
