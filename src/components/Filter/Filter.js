import React from 'react';

import './Filter.scss';

const CheckBoxItem = ({ name, label, checked, onToggle }) => {
    return (
        <label htmlFor={name} className="checkbox">
            <input onChange={() => onToggle(name, checked)} checked={checked} id={name} type="checkbox" className="checkbox__input"/>
            <span className="checkbox__custom"></span>
            <span className="checkbox__text">{label}</span>
        </label>
    )
};

const Filter = ({ onToggle, transitions }) => {
    return (
        <div className="filter">
            <div className="filter__header">
                <div className="filter__title">
                    Количество пересадок
                </div>
            </div>
            <div className="filter__body">
                <CheckBoxItem onToggle={onToggle} checked={transitions["all"]} label="Все" name="all" />
                <CheckBoxItem onToggle={onToggle} checked={transitions["straight"]} label="Прямой" name="straight" />
                <CheckBoxItem onToggle={onToggle} checked={transitions["oneTransition"]} label="1 пересадка" name="oneTransition" />
                <CheckBoxItem onToggle={onToggle} checked={transitions["twoTransition"]} label="2 пересадки" name="twoTransition" />
                <CheckBoxItem onToggle={onToggle} checked={transitions["threeTransition"]} label="3 пересадки" name="threeTransition" />
            </div>
        </div>
    )
};

export default Filter
