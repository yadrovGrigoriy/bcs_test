export const generateValues = () => {
    const values = []
    for(let i = 50; i <= 3000; i += 50){
        if( i === 50 || i ===  500 || i === 1000 || i === 2000 || i === 3000){
            values.push(i)
        } else {
            values.push('')
        }
    }
    return values
}