import React from "react";
//import "./Filter.scss";

const Filter = () => {
    return (
        <>
            <div>
                <tbody>
                    <select name="qualify" className="form-select">
                        <option value="select">Filtro</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                    </select>
                </tbody>
            </div>
        </>
    );
};

export default Filter;
