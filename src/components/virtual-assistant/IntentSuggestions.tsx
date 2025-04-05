import { IntentSuggestion } from "@/types/intents"

type Props = {
    heading: string
    suggestions: IntentSuggestion[]
}

export default function IntentSuggestions({ heading, suggestions }: Props) {
    if (suggestions.length === 0) return null

    // Limit to 3 suggestions as a safeguard against unexpected input
    const limitedSuggestions = suggestions.slice(0, 3)

    return (
        <section className='px-4 py-3'>
            <h2 className='text-sm font-semibold text-gray-600 mb-2'>
                {heading}:
            </h2>

            <div className='flex flex-wrap gap-2'>
                {limitedSuggestions.map((suggestion) => (
                    <button
                        key={suggestion.key}
                        type='button'
                        className='border border-green-700 text-green-700 rounded-full px-4 py-1 text-sm font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-600'
                    >
                        {suggestion.label}
                    </button>
                ))}
            </div>
        </section>
    )
}
