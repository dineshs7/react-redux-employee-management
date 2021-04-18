import { Component } from 'react';
import { connect } from 'react-redux';
import { FORM_SUBMISSION_STATUS, LOGIN, SHOW_DASHBOARD } from './actions/actionTypes';
import { credentials } from '../src/reducers/data';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: {
                username: "",
                password: "",
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        const { id, value } = e.target;
        this.setState(prevState =>
            ({
                [id]: value,
                error: {
                    ...prevState.error,
                    [e.target.id]: ""
                }
            })
        );
    }


    validateFormField() {
        var username = this.state.username;
        var password = this.state.password;
        var isValidForm = false;
        if (username !== credentials.username && username === "") {
            this.setState(prevState => ({
                ...prevState,
                error: {
                    username: "Username is incorrect",
                    password: prevState.error.password
                },
            }))
            isValidForm = false
        }
        if (password !== credentials.password && password === "") {
            this.setState(prevState => ({
                ...prevState,
                error: {
                    username: prevState.error.username,
                    password: "Password is incorrect"
                },
            }))
            isValidForm = false
        }
        if (username !== "" && password !== "") {
            isValidForm = true
        }
        return isValidForm;
    }


    handleFormSubmit(e) {
        e.preventDefault();
        var isvalidForm = this.validateFormField()
        if (isvalidForm) {
            const payload = {
                formSubmitted: this.validateFormField(),
                userStatus: LOGIN,
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                type: FORM_SUBMISSION_STATUS
            }
            this.props.formSubmit(payload);
            this.props.showDashboard();
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <form className="login-form">
                <h1 className="primary-heading">LOGIN</h1>
                <div className="form-controls">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username"
                        value={this.state.username} onChange={this.handleInputChange} placeholder="Username"></input>
                    <span className="error">{this.state.error.username}</span>
                </div>
                <div className="form-controls">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"
                        value={this.state.password} onChange={this.handleInputChange} placeholder="Password"></input>
                    <span className="error">{this.state.error.password}</span>
                </div>
                <button type="submit" className="login-button" onClick={this.handleFormSubmit}>Login</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    formSubmit: (payload) => dispatch(payload),
    showDashboard: () => dispatch({ type: SHOW_DASHBOARD })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

