<template>
	<div id="app">
		<div class="grid">
			<div v-for="row, i in grid" class="row">
				<div @mouseenter="hoverID = getID(i, j)" @mouseleave="hoverID = null" v-for="cell, j in row" class="cell">
					<div class="item">{{ cell }}</div>
					<div v-show="hoverID == getID(i, j)" class="options">
						<div @click="setModal(true, 'changeCell', cell)" class="fas fa-edit"></div>
						<div class="fas fa-search-plus"></div>
						<div class="fas fa-trash-alt"></div>
					</div>
				</div>
			</div>
		</div>
		<modal :params="modal" @closeModal="setModal(false)">
			<component :is="modal.view"></component>
		</modal>
	</div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>