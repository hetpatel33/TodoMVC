import React from 'react'
import './styles.css';

const InputBox = ({onEnter, placeholder}) => {

    const handleKeyDown = function(ev) {
        const text = ev.target.value.trim();
      
        if( ev.which === 13 && text ) {
            onEnter(text);
            ev.target.value = '';
        }
    }

    return (
        <input type="text" 
               className="todo-bar" 
               placeholder={placeholder}
               onKeyDown={ handleKeyDown } />
    )
}

export default InputBox;