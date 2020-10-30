import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input } from 'reactstrap';
import './WelcomeScreen.css';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.getDataFromGit(this.state.userName);
    }

    render() {
        return (
            <div className='container-fluid welcomeScreen'>
                <div className='row'>
                    <div className='col-md-6 leftWelcome'>
                        <img
                            src={process.env.PUBLIC_URL + '/git_icon.png'}
                            className="rounded welcomeImage"
                            alt="Git Hub"
                        />
                    </div>
                    <div className='col-md-6 rightWelcome'>
                        <p className='display-1 marginSet'>Welcome</p>
                        <InputGroup>
                            <Input
                                className='my-5 w-25'
                                placeholder="please enter git username"
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                        <Button color='danger' onClick={this.handleSubmit}>Show Repos</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default WelcomeScreen;
