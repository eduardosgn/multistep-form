import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange }) => {
    return <InputMask mask='99 9 9999-9999' value={value} onChange={onChange} placeholder='e.g. 99 9 9999-9999' />
};

export default PhoneInput;