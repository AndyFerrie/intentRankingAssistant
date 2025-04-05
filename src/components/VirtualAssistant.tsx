"use client"

export default function VirtualAssistant() {
    return (
        <section
            role='dialog'
            aria-label='Virtual Assistant'
            className='flex justify-center items-center min-h-screen'
        >
            <div className='w-[320px] shadow-lg border bg-white overflow-hidden'>
                <header className='bg-green-700 text-white px-4 py-2'>
                    <h2 className='text-sm font-semibold'>Chat</h2>
                </header>

                <div className='p4 text-sm-text-gray-700'>Chat goes here</div>
            </div>
        </section>
    )
}
