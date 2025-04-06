import {
    IntentKey,
    intentLabels,
    IntentRecord,
    RankedSuggestion,
} from "@/types/intents"
import { roundTo } from "./number"

// Constants for readability and maintainability
const MS_IN_DAY = 1000 * 60 * 60 * 24
const COUNT = 3

/**
 * Filters records to only include those created within the given number of days.
 */
function filterByDays(records: IntentRecord[], days: number): IntentRecord[] {
    if (!days) return records

    const now = Date.now()
    return records.filter((record) => {
        const createdAt = new Date(record.createdAt).getTime()
        const ageInDays = (now - createdAt) / MS_IN_DAY
        return ageInDays <= days
    })
}

/**
 * Aggregates frequency and confidence totals for each intent key.
 */
function buildIntentStats(records: IntentRecord[]) {
    const stats: Record<string, { frequency: number; confidenceSum: number }> =
        {}

    for (const { data } of records) {
        const { intRec, confidence } = data

        // Create a tracking object for this intent if missing
        if (!stats[intRec]) {
            stats[intRec] = { frequency: 0, confidenceSum: 0 }
        }

        // Increment frequency and sum confidence
        stats[intRec].frequency += 1
        stats[intRec].confidenceSum += confidence
    }

    return stats
}

/**
 * Returns the top 3 most frequent intents from recent records,
 * breaking ties by average confidence, then alphabetically by intent key.
 */
export default function getTopSuggestions(
    records: IntentRecord[],
    days = 30
): RankedSuggestion[] {
    // Step 1: Filter to recent records
    const filteredRecords = filterByDays(records, days)

    // Step 2: Count frequency and total confidence
    const intentStats = buildIntentStats(filteredRecords)

    // Step 3: Convert to enriched, sorted suggestion list
    return (
        Object.entries(intentStats)
            // Ignore unknown intent keys
            .filter(([key]) => key in intentLabels)
            .map(([key, { frequency, confidenceSum }]) => ({
                key: key as IntentKey,
                frequency,
                avgConfidence: confidenceSum / frequency,
            }))
            // Sort by frequency, then avg confidence, then alphabetically
            .sort((a, b) => {
                if (b.frequency !== a.frequency)
                    return b.frequency - a.frequency
                if (b.avgConfidence !== a.avgConfidence)
                    return b.avgConfidence - a.avgConfidence
                return a.key.localeCompare(b.key)
            })
            // Step 4: Limit to top 3
            .slice(0, COUNT)
            // Step 5: Add human-readable label and round avgConfidence
            .map(({ key, frequency, avgConfidence }) => ({
                key,
                label: intentLabels[key],
                frequency,
                avgConfidence: roundTo(avgConfidence),
            }))
    )
}
