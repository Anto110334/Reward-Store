export const sortLowest = products => {
    const array = [...products].sort( (a, b) => {
        return a.cost-b.cost;
    })
    return array;
}

export const sortHighest = products => {
    const array = [...products].sort( (a, b) => {
        return b.cost-a.cost;
    })
    return array;
}
