import type { IntentRecord, RankedSuggestion } from "@/types/intents"
import { intentLabels, IntentKey } from "@/types/intents"

export default function getTopSuggestions(
    records: IntentRecord[]
): RankedSuggestion[] {
    const count = 3

    const intentCounts: Record<
        string,
        { frequency: number; confidenceSum: number }
    > = {}

    for (const { data } of records) {
        const { intRec, confidence } = data

        if (!intentCounts[intRec]) {
            intentCounts[intRec] = { frequency: 0, confidenceSum: 0 }
        }

        intentCounts[intRec].frequency += 1
        intentCounts[intRec].confidenceSum += confidence
    }

    const sorted = Object.entries(intentCounts)
        .filter(([key]) => key in intentLabels)
        .map(([key, { frequency, confidenceSum }]) => ({
            key: key as IntentKey,
            frequency,
            avgConfidence: confidenceSum / frequency,
        }))
        .sort((a, b) => {
            if (b.frequency !== a.frequency) return b.frequency - a.frequency
            return b.avgConfidence - a.avgConfidence
        })
        .slice(0, count)

    return sorted.map(({ key, frequency }) => ({
        key,
        label: intentLabels[key],
        frequency,
    }))
}
