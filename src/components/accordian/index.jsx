import { useState } from "react"
import data from "./data";
import "./style.css";


export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ?  null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        //console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    function changeButtonText() {

    }

    console.log(selected, multiple);

    return <div className="wrapper">
        <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
        {enableMultipleSelection ? 'Disable' : 'Enable'} Multiple Selection</button>
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="item">
                            <div onClick={
                                    enableMultipleSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                } 
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className="content">{dataItem.answer}</div>
                            ): null}
                        </div>)
                    : <div>No data found!</div>
            }
        </div>
    </div>
}
