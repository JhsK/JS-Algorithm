function solution(user_id, banned_id) {
    const matches = {};
    
    function isMatch(pattern, user) {
        if (pattern.length !== user.length) return false;
        
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== '*' && pattern[i] !== user[i]) return false;
        }
        
        return true;
    }
    
    for (const ban of banned_id) {
        matches[ban] = [];
        for (const user of user_id) {
            if (isMatch(ban, user)) {
                matches[ban].push(user);
            }
        }
    }
    
    const resultSet = new Set();
    
    function backTrack(index, path) {
        if (index === banned_id.length) {
            const sortedPath = [...path].sort().join(',');
            resultSet.add(sortedPath);
            return;
        }
        
        
        const ban = banned_id[index];
        for (const user of matches[ban]) {
            if (!path.has(user)) {
                path.add(user);
                backTrack(index + 1, path);
                path.delete(user);
            }
        }
    }
    
    backTrack(0, new Set());
    return resultSet.size;
}