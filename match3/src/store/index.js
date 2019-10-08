import Vue from 'vue';

const cubeColorArray = [
    'red', 'yellow', 'green', 'blue',
];

const cubeColorInt = () => {
    const random = Math.floor(Math.random() * (4 - 0) + 0);
    return cubeColorArray[random];
};

/**
 * Метод для сравнивания соседних полей на соответсвие цветов
 * @param {Object} cube 
 * @param {Array} board 
 */
const isCubeMatch = (cube, board, length) => {
    const x = cube.position.x;
    const y = cube.position.y;
    const matchCubes = [];
    // Ищем совпадения по горизонатли в соседних клетках
    for (let i = x + 1; i !== length; i++) {
        if (cube.color === board[y][i].color) {
            matchCubes.push(board[y][i]);
        } else {
            break;
        }
    }
    for (let i = x - 1; i !== 0; i--) {
        if (cube.color === board[y][i].color) {
            matchCubes.push(board[y][i]);
        } else {
            break;
        }
    }
    // Если по горизонтали совпадений не нашлось, но ищем по вертикали
    if (matchCubes.length < 2) {
        for (let i = y + 1; i !== length; i++) {
            if (cube.color === board[i][x].color) {
                matchCubes.push(board[i][x]);
            } else {
                break;
            }
        }
        for (let i = y - 1; i !== 0; i--) {
            if (cube.color === board[i][x].color) {
                matchCubes.push(board[i][x]);
            } else {
                break;
            }
        }
    }
    return matchCubes;
};

export default {
    namespaced: true,
    state() {
        return {
            /**
            * Размер игровой доски, по умолчанию 10 на 10
            */
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
                            x: j,
                            y: i,
                        }
                    };
                    state.blocksGrid[i].push(buff);
                }
            }
        },
        changePosition(state, { first, second }) {
            const buff = first.color;
            Vue.set(state.blocksGrid[first.position.y][first.position.x], 'color', second.color);
            Vue.set(state.blocksGrid[second.position.y][second.position.x], 'color', buff);
            console.log(isCubeMatch(second, state.blocksGrid, 10));
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
        matchCube({ state, commit }, { first, second }) {
            commit('changePosition', { first, second });
        },
    },
};