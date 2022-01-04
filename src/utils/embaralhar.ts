export default function embaralhar<T>(array: T[]): T[] {
    return array
        .map(item => ({
            data: item,
            random: Math.random()
        }))
        .sort((a, b) => a.random - b.random)
        .map(item => item.data)
}
