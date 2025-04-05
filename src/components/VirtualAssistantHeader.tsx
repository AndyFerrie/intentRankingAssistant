type Props = {
    title: string
}

export default function VirtualAssistantHeader({ title }: Props) {
    return (
        <header className='bg-green-700 text-white px-4 py-2'>
            <h2 className='text-sm font-semibold'>{title}</h2>
        </header>
    )
}
