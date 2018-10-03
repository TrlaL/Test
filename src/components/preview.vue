<template>
	<div id="preview">
		<div v-show="params.type === null" class="empty">
			ПУСТО
		</div>
		<div v-show="params.type === 'image'" class="image">
			<img :src="params.source">
		</div>
		<div v-show="params.type === 'audio'" class="audio">
			<img src="../assets/audio.png">
		</div>
		<div v-show="params.type === 'video'" class="video">
			<video :src="params.source"></video>
		</div>
	</div>
</template>

<script>
export default {
	name: 'preview',
	props: {
		params: {
			required: true,
			type: Object
		}
	}
}
</script>

<style lang="scss">
#preview {

	.empty {
		align-items: center;
		display: flex;
		font-size: 2em;
		justify-content: center;
	}

	.audio {
		background: #F3920BFF;
		box-sizing: border-box;
		padding: 50px;
		height: 100%;
		width: 100%;
		
		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
	}
}
</style>