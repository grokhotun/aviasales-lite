import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

const Tabs = ({ filterBy, setFilter }) => {
    return (
        <div className="tabs">
            <button onClick={() => setFilter('fast')} className={classNames('tabs__btn tabs__btn--left', {'is-active': filterBy === 'fast'})}>Самый быстрый</button>
            <button onClick={() => setFilter('cheap')} className={classNames('tabs__btn tabs__btn--right', {'is-active': filterBy === 'cheap'})}>Самый дешевый</button>
        </div>
    )
}

export default Tabs;
