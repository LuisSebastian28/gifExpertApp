import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text"
                placeholder="Bucar gifs"
                value={inputValue}
                onChange={(e)=>onInputChange(e)}
            />
        </form>
    )

}
