export function roundTo(value: number, decimals = 4): number {
    return Math.round(value * 10 ** decimals) / 10 ** decimals
}
