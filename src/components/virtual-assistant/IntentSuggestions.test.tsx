import { render, screen } from "@testing-library/react"
import IntentSuggestions from "./IntentSuggestions"
import type { IntentSuggestion } from "@/types/intents"

const mockSuggestions: IntentSuggestion[] = [
    { key: "check_balance", label: "Check my balance" },
    { key: "fraud_report", label: "Report fraud" },
    { key: "card_replacement", label: "Replace my card" },
    { key: "open_account", label: "Open an account" },
]

describe("IntentSuggestions", () => {
    it("renders up to 3 suggestion buttons", () => {
        render(
            <IntentSuggestions
                heading='Popular queries'
                suggestions={mockSuggestions}
            />
        )

        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(3)
        expect(buttons[0]).toHaveTextContent("Check my balance")
        expect(buttons[1]).toHaveTextContent("Report fraud")
        expect(buttons[2]).toHaveTextContent("Replace my card")
    })

    it("renders nothing when suggestions array is empty", () => {
        const { container } = render(
            <IntentSuggestions
                heading='Popular queries'
                suggestions={[]}
            />
        )
        expect(container).toBeEmptyDOMElement()
    })
})
