const addition = (x, y) => {
    return x + y
}
const soustraction = (x, y) => {
    return x - y
}
const multiplication = (x, y) => {
    return x * y
}
const division = (x, y) => {
    return x / y
}

const opertion = (x, y, z) => {
    let value;
    switch (x) {
        case "+":
            value = addition(y, z)
            break;
        case "-":
            value = soustraction(y, z)
            break; 
        case "*":
            value = multiplication(y, z)
            break;
        case "/":
            value = division(y, z)
            break;    
        default:
            value ='operation error'
            break;
    }
    return value
}

const calculAll =(tab, sign) => {
    for(let i = 0 ; i < tab.length; i++){
        if(tab[i] === sign){
            const res = opertion(tab[i], tab[i - 1], tab[i + 1])
            const first = tab.slice(0, i - 1)
            const end = tab.slice(i + 2, )
            tab = [...first, res, ...end]
            i = 0
        }
    }
   return tab
}
//export this
export default function calcul (arr) {
    const divres = calculAll(arr, '/')
    const multipleres = calculAll([...divres], '*')
    const plusres = calculAll([...multipleres], '+')
    // const negativesign = calculAll([...plusres], '-')
    return calculAll([...plusres], '-').join('')
}