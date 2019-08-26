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
                    v-on:choose-cude="matchCube"
                >
                    <cube 
                        :show="true"
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
        };
    },
    methods: {
        matchCube(event) {
            console.log('toto');
            console.log(event);
        }
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
