import React, {Component} from 'react';
import RepositoryComponent from "../Repository/RepositoryComponent";
import axios from 'axios';
import { Container, Row, Table, ListGroup, ListGroupItem } from 'reactstrap';
import './ListOfReposComponent.css';
class ListOfReposComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositoryData: null
        }

    }

    componentDidMount() {
        axios.get('https://api.github.com/users/chaitanyaivc/repos')
            .then(res=>this.setState({
                repositoryData: res.data
            }));
    }

    render() {
        let { repositoryData } = this.state;
        return(
            <Container fluid={true}>
                <Row>
                {
                    repositoryData !== null ?
                            /*<Table className='reposList'>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>S.No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>*/
                                // {
                                    repositoryData.map((val,ind) => <RepositoryComponent
                                        repoData={val}
                                        index={ind}
                                    />)
                                // }
                                /*</tbody>
                            </Table>*/
                    :
                    null
                }
                </Row>
            </Container>
        )
    }
}

export default ListOfReposComponent;
