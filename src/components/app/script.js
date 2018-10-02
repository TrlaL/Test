import config from '../../config.json';
import modal from '../modal/main.vue';
import changeCell from '../changeCell.vue';
import preview from '../preview/main.vue';

export default {
	name: 'app',
	components: {
		modal, changeCell, preview
	},
	data() {
		return {
			config: config,
			grid: [],
			hoverID: null,
			modal: {
				data: null,
				view: null,
				visible: false
			}
		}
	},
	mounted() {
		for (let i = 0; i < this.config.grid.y; i++) {
			this.grid.push([]);
			for (let j = 0; j < this.config.grid.x; j++) {
				const cell = JSON.parse(JSON.stringify(this.config.cell));
				this.grid[i].push(cell);
			}
		}
	},
	methods: {
		clearCell(cell) {
			cell.type = this.config.cell.type;
			cell.source = this.config.cell.source;
		},
		getID(i, j) {
			return `cell-${i}-${j}`;
		},
		saveCell(data, source, type) {
			data.cell.source = source;
			data.cell.type = type;
			this.setModal(false);
		},
		setModal(visible, view, data) {
			this.modal.data = data;
			this.modal.view = view;
			this.modal.visible = visible;
		}
	}
}