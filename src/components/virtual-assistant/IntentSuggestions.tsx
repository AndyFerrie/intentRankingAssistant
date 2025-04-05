type IntentSuggestion = {
    key: string
    label: string
}

type Props = {
    heading: string
    intents: IntentSuggestion[]
}

export default function IntentSuggestions({ heading, intents }: Props) {
    return (
        <section className='px-4 py-3'>
            <h2 className='text-sm font-semibold text-gray-600 mb-2'>
                {heading}:
            </h2>

            <div className='flex flex-wrap gap-2'>
                {intents.map((intent) => (
                    <button
                        key={intent.key}
                        type='button'
                        className='border border-green-700 text-green-700 rounded-full px-4 py-1 text-sm font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-600'
                    >
                        {intent.label}
                    </button>
                ))}
            </div>
        </section>
    )
}
