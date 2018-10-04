<template>
	<div id="preview">
		<div v-show="params.type === null" class="empty"></div>
		<div v-show="params.type === 'image'" class="image">
			<img v-show="!errors['image']" @error="handleError('image')" @load="errors.image = false" :src="params.source" draggable="false">
		</div>
		<div v-show="params.type === 'audio'" class="audio">
			<audio @error="handleError('audio')" :src="params.source"></audio>
			<img draggable="false" src="../assets/audio.png">
		</div>
		<div v-show="params.type === 'video'" class="video">
			<video v-show="!errors['video']" @error="handleError('video')" @load="errors.video = false" :src="params.source"></video>
		</div>
	</div>
</template>

<script>
export default {
	name: 'preview',
	data() {
		return {
			errors: {
				image: false,
				audio: false,
				video: false
			}
		}
	},
	methods: {
		handleError(type) {
			if (this.params.type !== type) return;
			this.errors[type] = true;
			this.$parent.setModal(true, { view: 'message', data: type + 'Error', title: 'Ошибка' });
		},
	},
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
		color: #fff;
		cursor: pointer;
		display: flex;
		font-size: 5em;
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