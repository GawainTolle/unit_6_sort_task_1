export function paginate(items, activeItems, itemsSize) {
    const startIndex = (activeItems - 1) * itemsSize;
    return [...items].splice(startIndex, itemsSize);
}
