setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['aditya', 'john']

const shortNames = names.filter((name) => {
    return name.length <= 4
})

let geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}
geocode('Ambala', (data) => {
    console.log(data)
})

let add = (a, b, callback) => {
    let sum = a + b;
    callback(sum);
}

add(1, 4, (sum) => {
    console.log(sum)
})