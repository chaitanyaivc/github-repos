import React, {Component} from 'react';
import RepositoryComponent from "../Repository/RepositoryComponent";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import './ListOfReposComponent.css';
import RepositoryContainer from "../Repository/RepositoryContainer";
import getDataFromGit from "../../redux/fetch-data-from-git/fetch-data-from-git-action";

class ListOfReposComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositoryData: null,
            dataToShow: null
        }
    }
    static getDerivedStateFromProps(props,state) {
        if (props.searchKeyEntered.searchKey && state.repositoryData) {
            console.log('why: ', state.repositoryData)
            state.dataToShow = state.repositoryData.filter(val => val.name.toLowerCase()
                .includes(props.searchKeyEntered.searchKey.toLowerCase()))
        }
        return state;
    }

    componentDidMount() {
        /*axios.get('https://api.github.com/users/chaitanyaivc/repos')
            .then(res=>this.setState({
                repositoryData: res.data,
                dataToShow: res.data
            }));*/
        this.props.getDataFromGit();
    }

    render() {
        let { dataProcessedToDisplay } = this.props;
        console.log('entered key is: ', dataProcessedToDisplay);
        return(
            <Container className='containerClass' fluid={true}>
                <Row>
                {
                    dataProcessedToDisplay !== null ?
                        dataProcessedToDisplay.map((val,ind) => <RepositoryContainer
                            repoData={val}
                            index={ind}
                        />)
                    :
                    null
                }
                </Row>
            </Container>
        )
    }
}

export default ListOfReposComponent;
