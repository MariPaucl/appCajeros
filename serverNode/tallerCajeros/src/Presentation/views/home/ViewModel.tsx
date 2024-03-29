import React, {useState} from 'react';

export const useViewModel = () => {
    const [values, setValues] = useState({
        numId: '',
        nombre: '',
        apellido: '',
        correo: '',
        passCajero: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const register = async () => {
        try {
            const response = await fetch('http://192.168.0.15:3000/api/cajeros/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                throw new Error('Error al registrar el cajero');
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        ...values,
        onChange,
        register,
    };
};

export default useViewModel;