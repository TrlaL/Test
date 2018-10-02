<template>
	<div id="preview">
		<div v-show="params.type === null" class="empty">
			ПУСТО
		</div>
		<div v-show="params.type === 'image'" class="image">
			<img :src="params.source">
		</div>
		<div v-show="params.type === 'audio'" class="audio">
			<img src="../../assets/audio.png">
		</div>
		<div v-show="params.type === 'video'" class="video">
			<video :src="params.source"></video>
		</div>
	</div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>