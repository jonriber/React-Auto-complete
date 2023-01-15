//Mocking slow API requests
const getAutoCompleteResults = (query:string,signal?:AbortSignal):Promise<string[]> => {
    let fruits = [
        "Apple",
        "Banana",
        "Kiwi",
        "Orange",
        "Strawberry",
        "Watermelon",
        "Mango",
        "Grape",
        "Lime",
        "Lemon",
        "Peach",
        "Pear",
        "Raspberry",
        "Blueberry",
        "Blackberry",
        "Cherry",
        "Coconut",
        "Cucumber",
        "Grapefruit",
        "Honeydew",
        "Tangerine",

    ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(signal?.aborted){
                reject(signal.reason)
            }
            resolve(
                fruits.filter((fruit) => 
                    fruit.toLowerCase().includes(query.toLowerCase()))
            )
        },Math.random() *1000)
    })
};

export default getAutoCompleteResults;