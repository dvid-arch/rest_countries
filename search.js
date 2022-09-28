let str = '2abbacbaaf'
function searchChallenge(str) {
    let uniqChar = parseInt(str[0])
    let toArr = str.slice(1).split('')
    let box = [];
    let check = []

    for (let i = 0; i <= toArr.length-uniqChar; i++) {
        let alphaBox = []
        let count = 0

        for (let index = 0; index < toArr.length-i; index++) {
            if(!alphaBox.includes(toArr.slice(i)[index])){
                count++
            }
            if(count > uniqChar) break;
            alphaBox.push(toArr.slice(i)[index])
        }

        let arrToString = alphaBox.reduce((cur,nxt)=>{
            return cur + nxt
        },'')

        if(!check.includes(arrToString) && count >= uniqChar){
            box.push(arrToString)
            check.push(arrToString)
        }
    }

    return box.sort((a,b)=>{
        return b.length - a.length
    });
}


let arr = ['giyu', 'Mubaraq', 'natacha', 'Simple', 'Clint','simple']
let newArr = arr.reduce((acc,curr)=>{
    curr = curr[0].toUpperCase() + curr.slice(1);
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
},{})
console.log(newArr)