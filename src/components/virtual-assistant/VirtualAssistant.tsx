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
            <div className='w-[320px] h-[500px] flex flex-col shadow-lg border border-gray-400 bg-white overflow-hidden'>
                <VirtualAssistantHeader title='Chat' />
                <div className='flex-1 overflow-y-auto'>
                    <VirtualAssistantBody />
                </div>
                {/* Avoid rendering the component (and extra spacing) if no suggestions are available */}
                {suggestions.length > 0 && (
                    <IntentSuggestions
                        heading='Popular queries'
                        suggestions={suggestions}
                    />
                )}
                <VirtualAssistantInput />
            </div>
        </section>
    )
}
