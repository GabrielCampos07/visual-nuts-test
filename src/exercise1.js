const printingItems = (numberSelected) => {
    let numbers = []
    for (let number = 1; number <= numberSelected; number++) {
        numbers.push(showingItems(number))
    }
    return numbers;
}

const showingItems = (number) => {
    if (isDivisibleBy(number, 3) && (isDivisibleBy(number, 5))) {
        return 'Visual Nuts';
    }
    if (isDivisibleBy(number, 3)) {
        return 'Visual';
    }
    if (isDivisibleBy(number, 5)) {
        return 'Nuts';
    }
    return number;
}

const isDivisibleBy = (divided, divider) => {
    return !(divided % divider);
}

console.log(printingItems(100));

export {
    showingItems,
    printingItems
}