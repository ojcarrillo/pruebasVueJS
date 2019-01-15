Vue.component('pokemon', {
    template: `
        <div class="pokemon">
            <div class="pokemon-head"></div>
            <div class="pokemon-body"></div>
            <div class="pokemon-feet"></div>
        </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        player1: { pokemon: {}, winner: false },
        player2: { pokemon: {}, winner: false },
        pokemons: [
            { id: 0, name: 'pikachu', type: 'electro' },
            { id: 1, name: 'bulbasaur', type: 'planta' },
            { id: 2, name: 'squirtle', type: 'agua' },
            { id: 3, name: 'charmander', type: 'fuego' }
        ],
        results: [
            [0, 2, 1, 0],
            [1, 0, 2, 2],
            [2, 1, 0, 1],
            [0, 1, 2, 0],
        ]
    },
    methods: {
        fight: function () {
            const result = this.results[this.player1.pokemon.id][this.player2.pokemon.id];
            const selectWinner = [
                () => { this.player1.winner = true; this.player2.winner = true; },    // empate
                () => { this.player1.winner = true; this.player2.winner = false; },   // gana jugador 1
                () => { this.player1.winner = false; this.player2.winner = true; }    // gana jugador 2
            ];

            selectWinner[result]();
        },
        resetWinner: function () {
            this.player1.winner = false;
            this.player2.winner = false;
        }
    }
});