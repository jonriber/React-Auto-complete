//Mocking slow API requests
const getAutoCompleteResults = (query:string):Promise<string[]> => {
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
            resolve(
                fruits.filter((fruit) => 
                    fruit.toLowerCase().includes(query.toLowerCase()))
            )
        },Math.random() *1000)
    })
};

export default getAutoCompleteResults;