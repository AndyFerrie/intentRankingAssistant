import type { IntentRecord, RankedSuggestion } from "@/types/intents"
import { intentLabels, IntentKey } from "@/types/intents"
import { roundTo } from "./number"

export default function getTopSuggestions(
    records: IntentRecord[],
    days = 7
): RankedSuggestion[] {
    const count = 3

    const intentCounts: Record<
        string,
        { frequency: number; confidenceSum: number }
    > = {}

    const now = Date.now()
    const msInDay = 1000 * 60 * 60 * 24

    const filteredRecords = days
        ? records.filter((record) => {
              const createdAt = new Date(record.createdAt).getTime()
              const ageInDays = (now - createdAt) / msInDay
              return ageInDays <= days!
          })
        : records

    for (const { data } of filteredRecords) {
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
            if (b.avgConfidence !== a.avgConfidence)
                return b.avgConfidence - a.avgConfidence
            return a.key.localeCompare(b.key)
        })
        .slice(0, count)

    return sorted.map(({ key, frequency, avgConfidence }) => ({
        key,
        label: intentLabels[key],
        frequency,
        avgConfidence: roundTo(avgConfidence),
    }))
}
