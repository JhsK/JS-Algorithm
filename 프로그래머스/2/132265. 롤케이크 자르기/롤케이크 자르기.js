function solution(topping) {
    const rootMap = new Map();
    const windowSet = new Set();
    let result = 0;
    
    for (let x of topping) {
        if (rootMap.has(x)) {
            rootMap.set(x, rootMap.get(x) + 1);
        } else {
            rootMap.set(x, 1);
        }
    }
    
    for (let x of topping) {
        windowSet.add(x);
        rootMap.set(x, rootMap.get(x) - 1);
        
        if (rootMap.get(x) === 0) {
            rootMap.delete(x);
        }
        
        if (rootMap.size === windowSet.size) {
            result += 1;
        }
    }
    
    return result;
}