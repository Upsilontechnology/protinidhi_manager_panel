import { useState } from "react";


const useRegistration = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    console.log(data)

    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);
    return { open, setOpen, check, setCheck, data, setData }
};

export default useRegistration;