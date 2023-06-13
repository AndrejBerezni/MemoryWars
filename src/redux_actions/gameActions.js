const startGame = () => {
    return {
        type: 'GAME ON'
    }
}

const endGame = () => {
    return {
        type: 'GAME OVER'
    }
}

export {startGame, endGame}