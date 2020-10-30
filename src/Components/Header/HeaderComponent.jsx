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
    Input
} from 'reactstrap';
import connect from "react-redux";
import {searchReposByTitleAction} from "../../redux/SearchReposByTitle/search-repos-by-title-action";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            headerDropdownValue: 'All',
            titleSearchKeyWord: ''
        }
        this.toggle = this.toggle.bind(this);
        this.changeHeaderDropDown = this.changeHeaderDropDown.bind(this);
        this.searchRepoByTitle = this.searchRepoByTitle.bind(this);
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    changeHeaderDropDown = (event) => {
        /*this.setState({
            headerDropdownValue: event.target.className
        })*/
        this.props.changeHeaderDropDown(event.target.className);
    }

    searchRepoByTitle = (event) => {
        this.props.searchReposByTitleAction(event.target.value);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">GitHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <InputGroup>
                                <Input
                                    placeholder='Search repos by title'
                                    onChange={this.searchRepoByTitle}
                                />
                            </InputGroup>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.props.updatedDropDown}
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
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default HeaderComponent;
