function solution(places) {
    function dfs(place) {
        const sitArr = [];
        
        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place.length; j++) {
                if (place[i][j] === 'P') sitArr.push([i, j]);
            }
        }
        
        for (let i = 0; i < sitArr.length; i++) {
            for (let j = i + 1; j < sitArr.length; j++) {
                const [x1, y1] = sitArr[i];
                const [x2, y2] = sitArr[j];
                
                const manthath = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                
                if (manthath <= 1) return 0;
                if (manthath > 2) continue;
                if (manthath === 2) {
                    if (x1 === x2) {
                        if (place[x1][(y1 + y2) / 2] !== 'X') return 0;
                    } else if (y1 === y2) {
                        if (place[(x1 + x2) / 2][y1] !== 'X') return 0;
                    } else {
                        if (place[x1][y2] !== 'X' || place[x2][y1] !== 'X') return 0;
                    }
                }
            }
        }
        
        return 1;
    }
    
    return places.map(dfs)
}