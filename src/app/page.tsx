import VirtualAssistant from "@/components/VirtualAssistant"

export default function Home() {
    return (
        <main className='min-h-screen p-8'>
            <h1 className='flex justify-center text-2xl font-bold'>
                Virtual Assistant - intent-flow POC
            </h1>
            <VirtualAssistant />
        </main>
    )
}
