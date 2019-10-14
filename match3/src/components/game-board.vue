<template>
    <div>
        <span>Твои очки: {{ myScore }}</span>
        <table class="game-board">
            <tr
                v-for="y in board.length"
                :key="y"
            >
                <th
                    v-for="(cube, i) in board[y - 1]"
                    :key="i"
                    class="game-board__cell"
                >
                    <cube
                        @choose-cude="matchCube"
                        :show="true"
                        :cubInfo="cube"
                    />
                </th>
            </tr>
        </table>
    </div>
</template>

<script>

import Cube from './cube';

export default {
    name: 'game-board',

    components: {
        Cube,
    },

    data() {
        return {
            /**
             * Храним данные о том, какой кубик был выбран первым, а какой вторым
             */
            firstChoosenCube: null,
            secondChoosenCube: null,
        };
    },
    computed: {
        board() {
            return this.$store.state.blocksGrid;
        },
        myScore() {
            return this.$store.state.myScore;
        }
    },
    methods: {
        matchCube(event) {
            if (!this.firstChoosenCube || !this.secondChoosenCube) {
                this.firstChoosenCube ? this.secondChoosenCube = event : this.firstChoosenCube = event;
            }
            if (this.firstChoosenCube && this.secondChoosenCube) {
                this.$store.dispatch('matchCube', { 
                    first: this.firstChoosenCube, 
                    second: this.secondChoosenCube 
                });
                this.firstChoosenCube = null;
                this.secondChoosenCube = null;
            }
        },
        swapCubes() {
            
        },
    },
    created() {
        this.$store.dispatch('initialization');
    }
};
</script>

<style lang="stylus" >
.game-board {
    &__cell {
        border 1px solid blue
        width 50px
        height 50px
    }
}
</style>>
