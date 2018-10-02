import config from '../../config.json';
import modal from '../modal/main.vue';
import changeCell from '../changeCell.vue';

export default {
	name: 'app',
	components: {
		modal, changeCell
	},
	data() {
		return {
			config: config,
			grid: {},
			hoverID: null,
			modal: {
				data: null,
				view: null,
				visible: false
			}
		}
	},
	mounted() {
		this.grid = Array(config.grid.y).fill(null).map(() => {
			return Array(config.grid.x).fill(config.cell);
		});
	},
	methods: {
		getID(i, j) {
			return `cell-${i}-${j}`;
		},
		setModal(visible, view, data) {
			this.modal.data = data;
			this.modal.view = view;
			this.modal.visible = visible;
		}
	}
}