export const intentLabels = {
    check_balance: "Check my balance",
    fraud_report: "Report fraud",
    card_replacement: "Replace my card",
    loan_application: "Apply for a loan",
    fund_transfer: "Transfer funds",
    credit_limit_increase: "Increase credit limit",
    interest_rates: "Check interest rates",
    mortgage_approval: "Mortgage approval",
    open_account: "Open an account",
    request_statement: "Request a statement",
    cancel_direct_debit: "Cancel a direct debit",
    update_address: "Update my address",
    replace_lost_card: "Replace lost card",
    set_up_direct_debit: "Set up direct debit",
    cancel_standing_order: "Cancel standing order",
    apply_credit_card: "Apply for a credit card",
    update_phone_number: "Update phone number",
    loan_repayment_schedule: "Loan repayment schedule",
    dispute_transaction: "Dispute a transaction",
} as const

export type IntentKey = keyof typeof intentLabels
export type IntentLabel = (typeof intentLabels)[IntentKey]

export type IntentSuggestion = {
    key: IntentKey
    label: IntentLabel
}

export type RankedSuggestion = {
    key: IntentKey
    label: IntentLabel
    frequency: number
    avgConfidence: number
}

export type IntentRecord = {
    _id: string
    type: "IntentRecord"
    partyId: string
    brand: string
    data: {
        intRec: IntentKey
        confidence: number
        endpointStatus: string
        conversationId: string
    }
    createdAt: string
    updatedAt: string
    expireAt: string
}
