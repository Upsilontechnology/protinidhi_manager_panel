import { useState } from 'react';

const useLogin = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);
    return { open, setOpen, check, setCheck, data, setData }
};

export default useLogin;