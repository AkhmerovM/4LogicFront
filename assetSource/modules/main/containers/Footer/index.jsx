import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <img className="footer__img" src='img/footer.png'/>
            </div>
        );
    }
}
export { Footer  };
