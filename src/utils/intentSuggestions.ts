import { intentLabels, IntentKey, RankedSuggestion } from "@/types/intents"
import type { IntentRecord } from "@/types/intents"

export default function getTopSuggestions(
    records: IntentRecord[]
): RankedSuggestion[] {
    const count = 3
    const frequencyMap: Record<string, number> = {}

    for (const record of records) {
        const key = record.data.intRec
        frequencyMap[key] = (frequencyMap[key] || 0) + 1
    }

    const topIntents = Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, count)
        .filter(([key]) => key in intentLabels)
        .map(([key, freq]) => ({
            key: key as IntentKey,
            frequency: freq,
        }))

    return topIntents.map(({ key, frequency }) => ({
        key,
        label: intentLabels[key],
        frequency,
    }))
}
