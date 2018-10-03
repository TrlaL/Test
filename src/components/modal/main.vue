<template>
	<transition name="fade">
		<div id="modal" v-show="params.visible">
			<div class="box">
				<div class="header">
					<div>Модальное окно</div>
					<div @click="$emit('closeModal')" class="close fas fa-times"></div>
				</div>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>