import { IntentRecord } from "@/types/intents"

export function createRecord(
    overrides: Partial<Omit<IntentRecord, "data">> & {
        data?: Partial<IntentRecord["data"]>
    } = {}
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
        expireAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }

    return {
        ...defaultRecord,
        ...overrides,
        data: {
            ...defaultRecord.data,
            ...(overrides.data ?? {}),
        },
    }
}
