function solution(n, m, x, y, r, c, k) {
    const directions = [
        { arrow: 'd', dx: 1, dy: 0 },
        { arrow: 'l', dx: 0, dy: -1 },
        { arrow: 'r', dx: 0, dy: 1 },
        { arrow: 'u', dx: -1, dy: 0 },
    ];
    
    const isValid = (nx, ny) => nx >= 1 && nx <= n && ny >= 1 && ny <= m;
    const manhattan = Math.abs(x - r) + Math.abs(y - c);
    
    // 도달할 수 없는 경우 바로 "impossible" 반환
    if (manhattan > k || (k - manhattan) % 2 !== 0) {
        return "impossible";
    }

    let result = '';
    let currX = x;
    let currY = y;
    let rest = k;

    while (rest > 0) {
        for (const { arrow, dx, dy } of directions) {
            const nextX = currX + dx;
            const nextY = currY + dy;
            const newManhattan = Math.abs(nextX - r) + Math.abs(nextY - c);
            
            // 유효한 좌표인지 확인하고 남은 거리 계산
            if (isValid(nextX, nextY) && newManhattan <= rest - 1) {
                result += arrow;
                currX = nextX;
                currY = nextY;
                rest--;
                break;
            }
        }
    }

    return result;
}