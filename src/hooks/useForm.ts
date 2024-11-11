import { ChangeEvent, useState } from "react"

interface Values {
    [key: string]: string;
}

export const useForm = (initialState: Values = {}) => {

    const [formState, setFormState] = useState(initialState)

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialState)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
