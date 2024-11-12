    function calculateDate(date, value) {
        const dateArr = date.split('.');
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];
        
        let yearValue = year * value;
        let monthValue = (Number(month) - 1) * 28; 
        let dayValue = Number(day);

        if (Number(month) === 0) {
            monthValue = 0;
        }
        
        return yearValue + monthValue + dayValue;
    }

function solution(today, terms, privacies) {
    const result = [];
    const yearToMonth = 28 * 12; // 1년 기준 
    
    const todayValue = calculateDate(today, yearToMonth);
    const termsTable = {};

    for (const term of terms) {
        const arr = term.split(' ');
        termsTable[arr[0]] = Number(arr[1]) * 28;
    }

    for (let i = 0; i < privacies.length; i++) {
        const data = privacies[i].split(' ');
        const date = calculateDate(data[0], yearToMonth);
        const periodValue = termsTable[data[1]];
        
        const plusValue = date + periodValue;
        
        if (plusValue <= todayValue) {
            result.push(i+1);
        }
    }
    
    result.sort((a, b) => a - b);
    return result;
}