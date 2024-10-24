function solution(keyinput, board) {
    const [boardX, boardY] = board;
    const maxX = Math.floor(boardX / 2);
    const maxY = Math.floor(boardY / 2);
    const command = {
        "left": [-1, 0],
        "right": [1, 0],
        "up": [0, 1],
        "down": [0, -1],
    };
    let result = [0, 0];
    
    for (let move of keyinput) {
        const [moveX, moveY] = command[move];
        const newX = result[0] + moveX;
        const newY = result[1] + moveY;
        
        if (newX >= -maxX && newX <= maxX && newY >= -maxY && newY <= maxY) {
            result = [newX, newY];
        }
    }
    
    return result;
}