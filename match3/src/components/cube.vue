<template>
    <div 
        v-show="show"
        class="cube"
        :class="[`cube--${cubInfo.color}`, {'cube--chosen': chosen}]"
        @click="chooseCube"
    >
    </div>
</template>

<script>

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
         * Информация о кубике
         */
        cubInfo: {
            type: Object,
        }
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
            // Посылаем событие родителю, что пользователь нажал на этот кубик
            this.$emit('choose-cude', this.cubInfo);
        }
    }
};
</script>

<style lang="stylus">
.cube {
    width 100%
    height 100%
    &__empty {
        background-color none
    }
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