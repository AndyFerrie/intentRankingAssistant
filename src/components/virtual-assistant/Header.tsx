type Props = {
    title: string
}

export default function VirtualAssistantHeader({ title }: Props) {
    return (
        <header className='bg-lloyds-green text-white px-4 py-2'>
            <h2 className='text-sm font-semibold'>{title}</h2>
        </header>
    )
}
