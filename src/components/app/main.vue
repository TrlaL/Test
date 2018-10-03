<template>
	<div id="app">
		<div class="grid">
			<div v-for="row, i in grid" class="row">
				<div
					@dragstart="dragStart"
					@dragenter="dragEnter"
					@dragover="dragOver"
					@dragend="dragEnd"
					@mouseenter="hoverID = getID(i, j)"
					@mouseleave="hoverID = null"
					v-for="cell, j in row"
					:id="getID(i, j)"
					class="cell"
					draggable="true"
				>
					<div class="item">
						<preview :params="cell"></preview>
					</div>

					<!-- ВЫПАДАЮЩЕЕ МЕНЮ -->
					<transition name="slide">
						<div v-show="hoverID == getID(i, j)" class="options">
							<div @click="editCell(cell, [i, j])" class="fas fa-edit"></div>
							<div v-show="cell.source">
								<div @click="setPlayer(true, cell)" class="fas fa-play"></div>
							</div>
							<div @click="clearCell(cell)" class="fas fa-trash-alt"></div>
						</div>
					</transition>

					<!-- ИКОНКА ФАЙЛА -->
					<div class="type">
						<div v-show="cell.type === 'image'" class="fas fa-image"></div>
						<div v-show="cell.type === 'video'" class="fas fa-video"></div>
						<div v-show="cell.type === 'audio'" class="fas fa-file-audio"></div>
					</div>

				</div>
			</div>
		</div>
		<div class="mini-menu">
			<div @click="getHelp" class="help fas fa-question-circle"></div>
			<div @click="getConfig" class="config fas fa-cog"></div>
		</div>
		<modal :params="modal" @closeModal="setModal(false)">
			<component :is="modal.view" :data="modal.data" @saveCell="saveCell" @saveConfig="saveConfig"></component>
		</modal>
		<player :params="player" @closePlayer="setPlayer(false)"></player>
	</div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>