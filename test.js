let arr = ['arr','arb','ard','arc','acb','bec','bbc']


// console.log(arr.sort())


let num = [2,4,8,10,12,13,21,24,26,37,42,46]

function persist(numArr,lim) {

    if(numArr.length<=lim){
        return numArr
    }
    let product = numArr.reduce((a,b)=>{
        return a*b
     },1)
    return persist(String(product).split('').filter(n=>{
        return parseInt(n) != 0 && !isNaN(parseInt(n))
    }),lim)
}

console.log((persist(num,1)))