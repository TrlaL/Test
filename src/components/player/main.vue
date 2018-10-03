<template>
	<transition name="fade">
		<div id="player" v-show="params.visible">
			<div v-show="params.cell.type === 'image'" class="image-container">
				<img :src="params.cell.source">
			</div>
			<div v-show="params.cell.type === 'audio'" class="audio-container">
				<audio :src="params.cell.source" ref="audio" autoplay controls></audio>
			</div>
			<div v-show="params.cell.type === 'video'" class="video-container">
				<video :src="params.cell.source" ref="video" autoplay controls></video>
			</div>
			<div @click="close" class="close fas fa-times"></div>
		</div>
	</transition>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>