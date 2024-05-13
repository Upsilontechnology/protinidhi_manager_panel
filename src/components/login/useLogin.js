import { useState } from 'react';

const useLogin = () => {
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);
    return { open, setOpen, check, setCheck }
};

export default useLogin;