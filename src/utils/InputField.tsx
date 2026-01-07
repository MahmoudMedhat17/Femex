
interface IInputField {
    label: string;
    error?: string;
    children: React.ReactNode;
};

const InputField = ({ label, error, children }: IInputField) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight'>
                {label}
            </label>
            {children}
            {error && <p className='text-red-500 mt-1'>{error}</p>}
        </div >
    )
}

export default InputField