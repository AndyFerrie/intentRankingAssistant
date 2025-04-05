import { intentLabels, IntentKey, IntentSuggestion } from "@/types/intents"
import type { IntentRecord } from "@/types/intents"

export default function getTopSuggestions(
    records: IntentRecord[]
): IntentSuggestion[] {
    const count = 3
    const frequencyMap: Record<string, number> = {}

    for (const record of records) {
        const key = record.data.intRec
        frequencyMap[key] = (frequencyMap[key] || 0) + 1
    }

    const sortedKeys = Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, count)
        .map(([key]) => key)
        .filter((key): key is IntentKey => key in intentLabels)

    return sortedKeys.map((key) => ({
        key,
        label: intentLabels[key],
    }))
}
