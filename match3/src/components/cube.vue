<template>
    <div 
        v-show="show"
        class="cube"
        :class="[`cube--${cubeColorInt}`, {'cube--chosen': chosen}]"
        @click="chooseCube"
    >
    </div>
</template>

<script>

const cubeColorArray = [
    'red', 'yellow', 'green', 'blue',
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
        /**
         * Координаты кубика
         */
        position: {
            type: Object,
        }
    },
    computed: {
        /**
         * Какой будет цвет у кибика приинициализации
         */
        cubeColorInt() {
            const random = Math.floor(Math.random() * (4 - 0) + 0);
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
            // Собираем данные о кубике в один объект
            const buff = {
                color: this.cubeColorInt,
                position: this.position
            };
            // Посылаем событие родителю, что пользователь нажал на этот кубик
            this.$emit('choose-cude', buff);
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
    &--blue {
        background-color blue
    }
    &--chosen {
        border solid 2px black
    }
}
</style>