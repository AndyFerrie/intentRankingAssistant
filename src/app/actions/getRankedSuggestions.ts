"use server"

import getTopSuggestions from "@/utils/intentSuggestions"
import rawData from "@/data/technical_assessment_chatbot_data.json"
import { IntentRecord } from "@/types/intents"

// For this POC, we cast the mock JSON to IntentRecord[] to keep things simple.
// Since JSON has no concept of TypeScript, it can't guarantee that `intRec` matches our `IntentKey` union.
// In production, we'd use runtime validation (e.g. Zod) to enforce this safely.
const data = rawData as IntentRecord[]

export async function getRankedSuggestions() {
    return getTopSuggestions(data)
}
