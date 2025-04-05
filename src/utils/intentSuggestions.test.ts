import { createRecord } from "@/test/factories/createRecord"
import getTopSuggestions from "./intentSuggestions"

describe("getTopSuggestions", () => {
    it("returns the top 3 most frequent intents", () => {
        const records = [
            createRecord({ data: { intRec: "check_balance" } }),
            createRecord({ data: { intRec: "check_balance" } }),
            createRecord({ data: { intRec: "check_balance" } }),
            createRecord({ data: { intRec: "fraud_report" } }),
            createRecord({ data: { intRec: "fraud_report" } }),
            createRecord({ data: { intRec: "card_replacement" } }),
            createRecord({ data: { intRec: "card_replacement" } }),
            createRecord({ data: { intRec: "loan_application" } }),
            createRecord({ data: { intRec: "fund_transfer" } }),
        ]

        const result = getTopSuggestions(records)

        expect(result).toEqual([
            {
                key: "check_balance",
                label: "Check my balance",
                frequency: 3,
            },
            {
                key: "fraud_report",
                label: "Report fraud",
                frequency: 2,
            },
            {
                key: "card_replacement",
                label: "Replace my card",
                frequency: 2,
            },
        ])
    })
    it("breaks ties by average confidence when frequencies are equal", () => {
        const records = [
            createRecord({
                data: { intRec: "check_balance", confidence: 0.8 },
            }),
            createRecord({
                data: { intRec: "check_balance", confidence: 0.9 },
            }),
            createRecord({
                data: { intRec: "fraud_report", confidence: 0.95 },
            }),
            createRecord({
                data: { intRec: "fraud_report", confidence: 0.99 },
            }),
            createRecord({
                data: { intRec: "card_replacement", confidence: 0.88 },
            }),
            createRecord({
                data: { intRec: "card_replacement", confidence: 0.9 },
            }),
        ]

        const result = getTopSuggestions(records)

        expect(result).toEqual([
            { key: "fraud_report", label: "Report fraud", frequency: 2 },
            { key: "card_replacement", label: "Replace my card", frequency: 2 },
            { key: "check_balance", label: "Check my balance", frequency: 2 },
        ])
    })
})
