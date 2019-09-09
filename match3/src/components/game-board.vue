<template>
    <div>
        <table class="game-board">
            <tr
                v-for="y in boardSize.y"
                :key="y"
            >
                <th
                    v-for="x in boardSize.x"
                    :key="x"
                    class="game-board__cell"
                >
                    <cube
                        @choose-cude="matchCube"
                        :show="true"
                        :position="{x, y}"
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
            * Размер игровой доски, по умолчанию 10 на 10
            */
            boardSize: {
                x: 10,
                y: 10,
            },
            /**
             * Храним данные о том, какой кубик был выбран первым, а какой вторым
             */
            firstChoosenCube: null,
            secondChoosenCube: null,
        };
    },
    methods: {
        matchCube(event) {
            if (!this.firstChoosenCube || !this.secondChoosenCube) {
                this.firstChoosenCube ? this.secondChoosenCube = event : this.firstChoosenCube = event;
            }
        },
        swapCubes() {
            
        },
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
