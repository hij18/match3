<template>
    <div 
        v-show="show"
        class="cube"
        :class="[`cube--${cubeColorInt}`, {'cube--chosen': chosen}]"
        @click="chooseCube"
    >
        {{ cubeColorInt }}
    </div>
</template>

<script>

const cubeColorArray = [
    'red', 'yellow', 'green'
];

export default {
    name: 'game-cube',
    props: {
        /**
         * Показываем или нет блок на поле
         */
        show: {
            type: Boolean,
        },
    },
    computed: {
        /**
         * Какой будет цвет у кибика приинициализации
         */
        cubeColorInt() {
            const random = Math.floor(Math.random() * (3 - 0) + 0);
            return cubeColorArray[random];
        },
    },
    data() {
        return {
            chosen: false,
        };
    },
    methods: {
        /**
         * Метод для обработки клика по кубику
         */
        chooseCube(event) {
            this.chosen = !this.chosen;
            this.$emit('choose-cude', this.cubeColorInt);
        }
    }
};
</script>

<style lang="stylus">
.cube {
    width 100%
    height 100%
    &--red {
        background-color red
    }
    &--yellow {
        background-color yellow
    }
    &--green {
        background-color green
    }
    &--chosen {
        border solid 2px black
    }
}
</style>