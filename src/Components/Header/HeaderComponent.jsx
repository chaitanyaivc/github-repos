import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import connect from "react-redux";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            headerDropdownValue: 'All'
        }
        this.toggle = this.toggle.bind(this);
        this.changeHeaderDropDown = this.changeHeaderDropDown.bind(this);
    }

    toggle = () => {
        this.setState({
            isOpen: this.state.isOpen
        })
    }

    changeHeaderDropDown = (event) => {
        this.setState({
            headerDropdownValue: event.target.className
        })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.state.headerDropdownValue}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <div onClick={this.changeHeaderDropDown} className='All'>All</div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div onClick={this.changeHeaderDropDown} className='Favourites'>Favourites</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>@</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder='Search repos' />
                            </InputGroup>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default HeaderComponent;
