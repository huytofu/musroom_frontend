import React from 'react';
import {Navbar} from 'reactstrap';

const appHeaderStyle = {
    position: 'relative'
}

class Header extends React.Component {
    render() {
        const { onNavLinkChange } = this.props;

        return (
            <section className="app-header" style={appHeaderStyle}>
                <Navbar color='dark' className="basic-navbar-nav">
                    <ul className="list-unstyled list-inline row" style={{margin: 0}}>
                        <li style={{paddingLeft: 5}}>
                            <span style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.20)'}}>
                                <button className='btn btn-primary'>
                                <a onClick={onNavLinkChange}>Edibility Prediction</a>
                                </button>
                            </span>
                        </li>
                        <li style={{paddingLeft: 5}}>
                            <span style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.20)'}}>
                                <button className='btn btn-primary'>
                                <a onClick={onNavLinkChange}>Historical Predictions</a>
                                </button>
                            </span>
                        </li>
                    </ul>
                </Navbar>
            </section>
        );
    }

}

export default Header;