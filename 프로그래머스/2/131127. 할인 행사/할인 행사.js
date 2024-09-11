function shallowWantObj(hashTable, shallowObj) {
    for (let key of Object.keys(hashTable)) {
        if (hashTable[key] !== shallowObj[key]) {
            return false;
        }
    }
    
    return true;
}

function solution(want, number, discount) {
    let result = 0;
    const hashTable = {};
    const canDiscount = discount.length - 9;
    
    for (let i = 0; i < want.length; i++) {
        hashTable[want[i]] = number[i];
    }
    
    for (let i = 0; i < canDiscount; i++) {
        const sliceDiscount = discount.slice(i, i + 10);
        const shallowObj = {};
        for (let x of sliceDiscount) {
            if (shallowObj[x]) {
                shallowObj[x] += 1;
            } else {
                shallowObj[x] = 1;
            }
        }
        if (shallowWantObj(hashTable, shallowObj)) {
            result++;
        }
    }
    
    return result;
}