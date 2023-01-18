import { useContext, useRef } from "react";
import { AppContext } from "../App";
import styled from 'styled-components'

const Select = styled.select`
  border-radius : 20%
`;
function SelectColor() {

       const selectRef = useRef<HTMLSelectElement>(null);
        const [context , setContext] = useContext(AppContext);
       function selectedRef(color :string){
            if(selectRef && selectRef.current){
                setContext({color : color , lang : context.lang})
                selectRef.current.style.color = color;
                selectRef.current.style.borderColor = color;
            }
       }
    return ( 
        <>
            <Select ref={selectRef} style={{color : "red", borderColor : "red"}}
                onChange={(e) => selectedRef(e.target.value)} className="p-2" >
                <option value="red">Red</option>
                <option value="#057da8">Blue</option>
                <option value ="#019121">Green</option>
                <option value="#9302b0">Purple</option>
            </Select>
        </>
     );
}

export default SelectColor;