import React from 'react';
import { Header } from '@components';
import { TicketsContainer, TabsContainer, FilterContainer } from '@containers';

const App = () => {
    
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <div className="content__header">
                        <Header/>
                    </div>
                    <div className="content__body">
                        <aside className="content__aside">
                            <FilterContainer/>
                        </aside>
                        <main className="content__main">
                            <TabsContainer/> 
                            <TicketsContainer/>
                        </main>
                    </div>
                    <div className="content__footer"></div>
                </div>
            </div>
        </div>
    )

};

export default App