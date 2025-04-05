"use client"

import VirtualAssistantBody from "./Body"
import VirtualAssistantHeader from "./Header"
import VirtualAssistantInput from "./Input"
import IntentSuggestions from "./IntentSuggestions"

export default function VirtualAssistant() {
    return (
        <section
            role='dialog'
            aria-label='Virtual Assistant'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-[320px] shadow-lg border bg-white overflow-hidden'>
                <VirtualAssistantHeader title='Chat' />
                <VirtualAssistantBody />
                <IntentSuggestions
                    heading='Popular queries'
                    suggestions={[
                        { key: "check_balance", label: "Check my balance" },
                        { key: "fraud_report", label: "Report fraud" },
                        { key: "card_replacement", label: "Replace my card" },
                    ]}
                />
                <VirtualAssistantInput />
            </div>
        </section>
    )
}
