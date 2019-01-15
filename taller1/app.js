/* componente header */
Vue.component('game-header', {
	template: '<h1>Video Juegos</h1>'
});

/* componete para agregar nuevo juego */
Vue.component('game-add', {
	template: [
		'<div>',
		'<input type="text" v-model="titleGame" />',
		'<button @click="emitNewGame">Añadir</button>',
		'</div>'
	].join(''),
	data: function () {
		return {
			titleGame: null
		}
	},
	methods: {
		emitNewGame: function () {
			if (this.titleGame) {
				this.$emit('new', { title: this.titleGame });
				this.titleGame = null;
			}
		}
	},
});

/* componente para listar los juegos */
Vue.component('game-list', {
	props: ['games'],
	template: [
		'<ol>',
			'<game-item v-for="item in games" :game="item" :key="item.id"></game-item>',
		'</ol>'
	].join('')
});

/* componente para visualizar un juego (un dato) */
Vue.component('game-item', {
	props: ['game'],
	template: '<li>{{ game.title }}</li>'
});

/* aplicacion */
const app = new Vue({
	el: '#app',
	template: [
		'<div class="view">',
		'<game-header></game-header>',
		'<game-add @new="addNewGame"></game-add>',
		'<game-list v-bind:games="games"></game-list>',
		'</div>'
	].join(''),
	data: {
		games: [
		]
	},
	methods: {
		addNewGame: function (game) {
			this.games.push(game);
		}
	}
});