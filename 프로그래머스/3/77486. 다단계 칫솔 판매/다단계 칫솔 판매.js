function solution(enroll, referral, seller, amount) {
    const hashTable = {};
    const resultObj = {};
    
    for (let i = 0; i < enroll.length; i++) {
        hashTable[enroll[i]] = referral[i];
        resultObj[enroll[i]] = 0;
    }
    
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let person = seller[i];
        
        while (person !== '-' && money > 0) {
            const comission = Math.floor(money / 10);
            resultObj[person] += money - comission;
            
            money = comission;
            person = hashTable[person];
        }
    }
    
    return Object.values(resultObj);
}