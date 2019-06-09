import React, { Component } from 'react';
import './style.less';
import { BodyContainer } from 'modules/hackaton/containers/BodyContainer';
import { HeaderContainer } from 'modules/hackaton/containers/HeaderContainer';
class MainContainer extends Component {
    render () {
        return (
            <div className='main'>
                <div className="main__container">
                    <div className="main__header">
                        <HeaderContainer/>
                    </div>
                    <div className="main__body">
                        <BodyContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
export { MainContainer };
