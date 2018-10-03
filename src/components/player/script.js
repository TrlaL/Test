export default {
	name: 'player',
	methods: {
		close() {
			this.$refs.audio.pause();
			this.$refs.video.pause();
			this.$emit('closePlayer');
		}
	},
	props: {
		params: {
			required: true,
			type: Object
		}
	}
}