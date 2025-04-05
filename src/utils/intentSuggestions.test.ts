import { createRecord } from "@/test/factories/createRecord"
import getTopSuggestions from "./intentSuggestions"

describe("getTopSuggestions", () => {
    it("returns the top 3 most frequent intents", () => {
        const records = [
            createRecord({
                data: { intRec: "check_balance", confidence: 0.81 },
            }),
            createRecord({
                data: { intRec: "check_balance", confidence: 0.82 },
            }),
            createRecord({
                data: { intRec: "check_balance", confidence: 0.83 },
            }),
            createRecord({
                data: { intRec: "check_balance", confidence: 0.83 },
            }),
            createRecord({
                data: { intRec: "fraud_report", confidence: 0.84 },
            }),
            createRecord({
                data: { intRec: "fraud_report", confidence: 0.85 },
            }),
            createRecord({
                data: { intRec: "fraud_report", confidence: 0.85 },
            }),
            createRecord({
                data: { intRec: "card_replacement", confidence: 0.86 },
            }),
            createRecord({
                data: { intRec: "card_replacement", confidence: 0.87 },
            }),
            createRecord({
                data: { intRec: "loan_application", confidence: 0.88 },
            }),
            createRecord({
                data: { intRec: "fund_transfer", confidence: 0.89 },
            }),
        ]

        const result = getTopSuggestions(records)

        expect(result).toEqual([
            {
                key: "check_balance",
                label: "Check my balance",
                frequency: 4,
                avgConfidence: 0.8225,
            },
            {
                key: "fraud_report",
                label: "Report fraud",
                frequency: 3,
                avgConfidence: 0.8467,
            },
            {
                key: "card_replacement",
                label: "Replace my card",
                frequency: 2,
                avgConfidence: 0.865,
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
            {
                key: "fraud_report",
                label: "Report fraud",
                frequency: 2,
                avgConfidence: 0.97,
            },
            {
                key: "card_replacement",
                label: "Replace my card",
                frequency: 2,
                avgConfidence: 0.89,
            },
            {
                key: "check_balance",
                label: "Check my balance",
                frequency: 2,
                avgConfidence: 0.85,
            },
        ])
    })
    it("breaks ties by sorting alphabetically when frequency and confidence are equal", () => {
        const records = [
            createRecord({
                data: { intRec: "check_balance" },
            }),
            createRecord({
                data: { intRec: "card_replacement" },
            }),
            createRecord({
                data: { intRec: "credit_limit_increase" },
            }),
        ]

        const result = getTopSuggestions(records)

        expect(result).toEqual([
            {
                key: "card_replacement",
                label: "Replace my card",
                frequency: 1,
                avgConfidence: 0.9,
            },
            {
                key: "check_balance",
                label: "Check my balance",
                frequency: 1,
                avgConfidence: 0.9,
            },
            {
                key: "credit_limit_increase",
                label: "Increase credit limit",
                frequency: 1,
                avgConfidence: 0.9,
            },
        ])
    })
})
