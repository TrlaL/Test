<template>
	<div id="changeGrid">
		Ширина ({{ x }}):
		<input v-model="x" min="1" max="4" type="range">
		Высота ({{ y }}):
		<input v-model="y" min="1" max="4" type="range">
		<button @click="$emit('saveConfig', x, y)">Сохранить</button>
	</div>
</template>

<script>
export default {
	name: 'changeGrid',
	data() {
		return {
			x: this.data.config.grid.x,
			y: this.data.config.grid.y,
		}
	},
	props: {
		data: {
			required: true,
			type: Object
		}
	}
}
</script>

<style lang="scss">
#changeGrid {

	button, input, select {
		border: 1px solid #999;
		border-radius: 5px;
		box-sizing: border-box;
		font: inherit;
		margin-bottom: 5px;
		padding: 10px;
		width: 100%;

		&:focus {
			outline: none;
		}
	}

	input[type=range] {
		padding: 0;
	}

	button {
		background: #18E;
		border: 1px solid #07F;
		color: #fff;
		font-weight: bold;

		&:hover {
			background: #22A8DCFF;
		}
	}
}
</style>