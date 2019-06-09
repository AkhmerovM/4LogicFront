import React, { Component } from 'react';
import './style.less';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { RegistrationContainer } from 'modules/hackaton/containers/RegistrationContainer';
import { LoseContainer } from 'modules/hackaton/containers/LoseContainer';
import { getPeople } from 'modules/hackaton/actions'

function mapStateToProps (state) {
    return {
        // postData: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
        getPeople
    };
}
class BodyContainerWrapper extends Component {
    componentDidMount () {
        this.props.getPeople();
    }
    render () {
        return (
            <div className='body-container'>
                <Switch>
                    <Route component={RegistrationContainer} exact path='/info/registration' />
                    <Route component={LoseContainer} exact path='/info/lose' />
                    <Route component={RegistrationContainer} exact path='/info/search' />
                </Switch>
            </div>
        );
    }
}
const BodyContainer = connect(mapStateToProps, mapDispatchToProps())(BodyContainerWrapper);
export { BodyContainer };
