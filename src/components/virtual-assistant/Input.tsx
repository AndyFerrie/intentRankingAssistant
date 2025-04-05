export default function VirtualAssistantInput() {
    return (
        <form className='flex items-center border-t px-2 py-1 bg-white'>
            <input
                type='text'
                placeholder='Type your message'
                className='flex-1 p-2 text-sm italic text-gray-600 placeholder:italic placeholder:text-gray-400 bg-transparent outline-none'
            />
            <button
                type='submit'
                disabled
                className='text-gray-400 p-2'
                aria-label='Send message'
            >
                {/* Paper plane icon */}
                <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    viewBox='0 0 23 23'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M19 2.19367V16.7719C19 17.2775 18.4776 17.6128 18.0199 17.4009L12.8802 15.0208L8.77254 19.2871C8.34107 19.7352 7.58518 19.4289 7.58518 18.8058V12.3867L2.47708 10.7202C1.89021 10.5287 1.82926 9.72006 2.38076 9.44226L18 1.57457C18.4587 1.34323 19 1.67815 19 2.19367ZM18 2.74685L3.62657 9.98724L8.58518 11.605V17.9985L12.6621 13.7641L18 16.236V2.74685ZM15.4797 5.51685L15.8984 5.99695C15.9697 6.07875 15.9628 6.2025 15.8828 6.27582L11.123 10.6387C11.0415 10.7133 10.915 10.7078 10.8404 10.6264L10.4217 10.1463C10.3504 10.0645 10.3573 9.94075 10.4373 9.86742L15.1972 5.50455C15.2786 5.42992 15.4051 5.43542 15.4797 5.51685Z' />
                </svg>
            </button>
        </form>
    )
}
