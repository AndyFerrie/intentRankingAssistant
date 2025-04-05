import { getRankedSuggestions } from "@/app/actions/getRankedSuggestions"
import VirtualAssistantBody from "./Body"
import VirtualAssistantHeader from "./Header"
import VirtualAssistantInput from "./Input"
import IntentSuggestions from "./IntentSuggestions"
import { IntentSuggestion } from "@/types/intents"

export default async function VirtualAssistant() {
    const rankedSuggestions = await getRankedSuggestions()
    const suggestions: IntentSuggestion[] = rankedSuggestions.map(
        ({ key, label }) => ({
            key,
            label,
        })
    )

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
                    suggestions={suggestions}
                />
                <VirtualAssistantInput />
            </div>
        </section>
    )
}
