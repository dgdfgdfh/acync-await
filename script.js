//---------------------------------//
function delay(ms) {//<-- изначально в форме ожидания
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Math.random());
        }, ms)
    });
}
//---------------------------------//
// console.log('до Then')

// delay(1000)
//     .then(
//         () => {
//             return delay(1000);
//         })
//     .then(() => {
//         return delay(1000);
//     })
// console.log('После Then')
//---------------------------------//
async function fn() {
    try {
        const r1 = await delay(1000);
        const r2 = await delay(1000);
        const r3 = await delay(1000);
    
        console.log(r1);
        console.log(r2);
        console.log(r3)
    } catch (e) {
        console.log(e);
    }
 
}
console.log('До Fn')
fn();
console.log('После Fn')
//---------------------------------//



























//Then сработает только после того как выполниться promise, а после если есть таймер, случиться Then.

//-------------promise-------------//
//у promise есть три состояния:
//ожидание
//resolved
//rejected
//---------------------------------//