import { IntentRecord } from "@/types/intents"

export function createRecord(
    overrides: Partial<IntentRecord> = {}
): IntentRecord {
    const defaultRecord: IntentRecord = {
        _id: "1",
        type: "IntentRecord",
        partyId: "user_default",
        brand: "Lloyds Bank",
        data: {
            intRec: "check_balance",
            confidence: 0.9,
            endpointStatus: "Success",
            conversationId: "conv_default",
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        expireAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // +7 days
    }

    return {
        ...defaultRecord,
        ...overrides,
        data: {
            ...defaultRecord.data,
            ...overrides.data,
        },
    }
}
