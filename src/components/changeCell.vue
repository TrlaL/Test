<template>
	<div id="changeCell">
		Тип элемента:
		<select v-model="type">
			<option :value="key" v-for="type, key in config.mediaTypes">{{ type }}</option>
		</select>
		<div class="margin"></div>
		Источник (URL):
		<input v-model="source" type="text">
		<div class="margin"></div>
		<button @click="$emit('saveCell', data, source, type)">Сохранить</button>
	</div>
</template>

<script>
import config from '../config.json';

export default {
	data() {
		return {
			config: config,
			source: this.data.cell.source,
			type: this.data.cell.type
		}
	},
	props: {
		data: {
			required: true,
			type: Object
		}
	},
	watch: {
		data() {
			this.source = this.data.cell.source;
			this.type = this.data.cell.type;
		}
	}
}
</script>

<style lang="scss">
#changeCell {

	.margin {
		height: 5px;
		width: 100%;
	}

	button, input, select {
		border: 1px solid #999;
		border-radius: 5px;
		box-sizing: border-box;
		font: inherit;
		padding: 10px;
		width: 100%;

		&:focus {
			outline: none;
		}
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