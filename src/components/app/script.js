import config from '../../config.json';
import modal from '../modal/main.vue';
import changeCell from '../changeCell.vue';
import changeGrid from '../changeGrid.vue';
import message from '../message.vue';
import preview from '../preview.vue';
import player from '../player/main.vue';

export default {

	name: 'app',

	components: {
		modal,
		changeCell,
		changeGrid,
		message,
		preview,
		player
	},

	data() {
		return {
			config: config,
			drag: {
				target: null,
				drop: null
			},
			grid: [],
			hoverID: null,
			modal: {
				data: null,
				title: null,
				view: null,
				visible: false
			},
			player: {
				cell: null,
				visible: false
			}
		}
	},

	created() {
		this.createGrid();
	},

	methods: {

		clearCell(cell) {
			cell.type = this.config.cell.type;
			cell.source = this.config.cell.source;
		},

		coordsFromId(ID) {
			return ID.replace('cell-', '').split('-').map(str => Number(str));
		},

		createGrid() {
			this.grid = [];
			this.player.cell = JSON.parse(JSON.stringify(this.config.cell));
			for (let i = 0; i < this.config.grid.y; i++) {
				this.grid.push([]);
				for (let j = 0; j < this.config.grid.x; j++) {
					const cell = JSON.parse(JSON.stringify(this.config.cell));
					this.grid[i].push(cell);
				}
			}
		},

		dragStart(event) {
			this.drag.target = event.target;
			this.drag.target.style.opacity = 0.5;
		},

		dragEnter(event) {
			this.drag.drop = event.path.find(element => element.draggable);
		},

		dragEnd(event) {
			const drag = this.drag.target;
			const drop = this.drag.drop;
			if (drag && drop) {
				const coords = { from: this.coordsFromId(drag.id), to: this.coordsFromId(drop.id) };
				const copies = { from: Object.assign(this.grid[coords.from[0]][coords.from[1]]), to: Object.assign(this.grid[coords.to[0]][coords.to[1]]) };
				this.grid[coords.from[0]][coords.from[1]] = copies.to;
				this.grid[coords.to[0]][coords.to[1]] = copies.from;
				this.drag.target.style.opacity = 1;
			}
		},

		dragOver(event) {
			event.preventDefault();
		},

		getConfig() {
			this.setModal(true, {
				view: 'changeGrid',
				data: { mode: 'config', config: this.config },
				title: 'Настройка сетки'
			});
		},

		getHelp() {
			this.setModal(true, {
				view: 'message',
				data: 'help',
				title: 'Помощь'
			});
		},

		getID(i, j) {
			return `cell-${i}-${j}`;
		},

		editCell(cell, coords) {
			this.setModal(true, {
				view: 'changeCell',
				data: { cell: cell, cords: coords },
				title: 'Настройка ячейки'
			});
		},

		saveCell(data, source, type) {
			data.cell.source = source;
			data.cell.type = type;
			this.setModal(false);
		},

		saveConfig(x, y) {
			this.config.grid.x = x;
			this.config.grid.y = y
			this.createGrid();
			this.setModal(false);
		},

		setModal(visible, options = {}) {
			this.modal.data = options.data || this.modal.data;
			this.modal.view = options.view || this.modal.view;
			this.modal.title = options.title || this.modal.title;
			this.modal.visible = visible;
		},

		setPlayer(visible, cell) {
			this.player.cell = cell || this.config.cell;
			this.player.visible = visible;
		}

	}
}