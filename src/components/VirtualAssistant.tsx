"use client"

import VirtualAssistantBody from "./Body"
import VirtualAssistantHeader from "./Header"

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
                <div className='p4 text-sm-text-gray-700'>Chat goes here</div>
            </div>
        </section>
    )
}
