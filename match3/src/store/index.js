const cubeColorArray = [
    'red', 'yellow', 'green', 'blue',
];

const cubeColorInt = () => {
    const random = Math.floor(Math.random() * (4 - 0) + 0);
    return cubeColorArray[random];
};

export default {
    namespaced: true,
    state() {
        return {
            // Размер игрового поля
            boardSize: {
                x: 10,
                y: 10,
            },
            // Тут будем хратить текущее положение блоков в игре
            // По умолчанию сетка пустая (Вложенный массив)
            // Заполняется при инициализации игры
            blocksGrid: [],
        };
    },
    mutations: {
        setGameGrid(state) {
            for (let i = 0; i < state.boardSize.x; i++) {
                state.blocksGrid.push([]);
                for (let j = 0; j < state.boardSize.y; j++) {
                    const buff = {
                        color: cubeColorInt(),
                        position: {
                            x: i,
                            y: j,
                        }
                    };
                    state.blocksGrid[i].push(buff);
                }
            }
        }
    },
    actions: {
        /**
         * Вызываем создание сетки - игровой доски
         */
        initialization({ state, commit }) {
            if (state.boardSize && state.boardSize.x && state.boardSize.y) {
                commit('setGameGrid');
            }
        },
    },
};