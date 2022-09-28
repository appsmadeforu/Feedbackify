import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return null
            case false:
                return <li><a href='/auth/google'>Login With Google</a></li>
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }
    render() {
        console.log(this.props)

        return (
            <nav>
                <div className="nav-wrapper indigo darken-4">
                    <Link to={'/'} className="brand-logo">Feedbackify</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>{this.props.auth ? `Welcome, ${this.props.auth.displayName}` : null}</li>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({ auth }) {
    return {
        auth
    }
}
export default connect(mapStateToProps, null)(Header)