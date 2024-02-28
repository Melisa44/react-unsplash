// Searcheader.jsx
import { useState } from "react";

const Searcheader = ({ search }) => {
    const [valueInput, setValue] = useState('');

    const formClick = (event) => {
        event.preventDefault();
        search(valueInput);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (  
        <div className="searchDiv">
            <form onSubmit={formClick}>
                <label>Ne arıyorsunuz?</label>
                <input value={valueInput} onChange={handleChange}/>
                <button type="submit">Ara</button>
            </form>                      
        </div>  
    );
}

export default Searcheader;
