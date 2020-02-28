function compareArrays(arr1,arr2) {
    return arr1.length === arr2.length && arr1.every((v,i) => arr2[i] === v)
}

function memoize(fn,limit) {
    const memory = [];
    const func = function() {
        let args = Array.from(arguments)
        let item = memory.find(item => compareArrays(item.args,args))

        if (item === undefined) {
            console.log(`[${args}] не найдено,функция вызвана не из памяти`);
            const result = fn.apply(undefined,args);
            item = {
                args: args, 
                result: result
            };
            memory.push(item);

        if (memory.length > limit) {
            memory.shift()
        } return result;
        } else {
            console.log(`[${args}] найдено в памяти, результат возвращен из массива`);
            return item.result;
        }
    }
    return func;
}

// const sum = (a,b) => a+b;
// const multiply = (a,b) => a*b;

// const mSum = memoize(sum,2);
// const mMultiply = memoize(multiply,5);

// const divide = (a,b,c) => a/b*c;
// const mDivide = memoize(divide,4)

// console.log(sum(3,4));
// console.log(mSum(3,4));
// console.log(mSum(3,4));
// console.log(mMultiply(5,6));
// console.log(mMultiply(5,6));
// console.log(mDivide(10,2,15));