<template>
	<div id="message">
		<div v-show="data == 'help'">
			<ul class="tabs">
				<li @click="selectedTab = key" :class="{ selected: key == selectedTab }" v-for="type, key in config.mediaTypes">{{ type }}</li>
			</ul>
			<div class="content">
				<input v-for="link in config.links[selectedTab]" :value="link" type="text">
			</div>
		</div>
		<div v-show="data == 'imageError'">Произошла ошибка при загрузке изображения.</div>
		<div v-show="data == 'audioError'">Произошла ошибка при загрузке аудио.</div>
		<div v-show="data == 'videoError'">Произошла ошибка при загрузке видео.</div>
	</div>
</template>

<script>
import config from '../config.json';

export default {
	name: 'message',
	data() {
		return {
			config: config,
			selectedTab: 'image',
		}
	},
	props: {
		data: {
			required: true,
			type: String
		}
	}
}
</script>

<style lang="scss">
#message {

	.tabs {
		background: #fff;
		display: flex;

		.selected {
			background: #fff;
			border-bottom: 0;
			cursor: default;
		}

		* {
			background: #ccc;
			border: 1px solid #666;
			border-right: 0;
			cursor: pointer;
			flex: 1;
			padding: 5px;
			text-align: center;
		}

		*:last-child {
			border-right: 1px solid #666;
		}
	}

	.content {
		border: 1px solid #666;
		margin-top: -1px;
		padding: 10px;
	}

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