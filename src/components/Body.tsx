export default function VirtualAssistantBody() {
    return (
        <div className='h-64 overflow-y-auto p-4 bg-gray-50'>
            <p
                role='status'
                aria-live='polite'
                className='whitespace-pre-line bg-white border rounded-lg p-3 text-sm text-gray-800'
            >
                {`Hello, I’m your virtual assistant.

                I’m here to answer your questions. If I can’t help, I’ll find someone who can.

                Ask me things like:
                • Why was my payment declined?
                • How do I change my address?

                So, how can I help?`}
            </p>
        </div>
    )
}
