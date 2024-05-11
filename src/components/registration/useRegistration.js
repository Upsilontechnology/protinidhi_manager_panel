import { useState } from "react";


const useRegistration = () => {
    const [open, setOpen] = useState(false);
    return { open, setOpen }
};

export default useRegistration;