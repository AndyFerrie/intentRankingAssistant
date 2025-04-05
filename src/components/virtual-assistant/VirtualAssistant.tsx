"use client"

import VirtualAssistantBody from "./Body"
import VirtualAssistantHeader from "./Header"
import VirtualAssistantInput from "./Input"

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
                <VirtualAssistantInput />
            </div>
        </section>
    )
}
