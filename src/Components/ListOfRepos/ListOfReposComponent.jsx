import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';
import './ListOfReposComponent.css';
import RepositoryContainer from "../Repository/RepositoryContainer";
import ContributorsContainer from "../contributors/ContributorsContainer";

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
            state.dataToShow = state.repositoryData.filter(val => val.name.toLowerCase()
                .includes(props.searchKeyEntered.searchKey.toLowerCase()))
        }
        return state;
    }

    render() {
        let { dataProcessedToDisplay, mainContentViewReducer } = this.props;
        return(
            <Container className='containerClass' fluid={true}>
                {!mainContentViewReducer.display ?
                    <Row>
                        {
                            dataProcessedToDisplay !== null ?
                                dataProcessedToDisplay.length > 0 ?
                                dataProcessedToDisplay.map((val, ind) => <RepositoryContainer
                                    key={ind}
                                    repoData={val}
                                    index={ind}
                                />) :
                                    <div>No data is available in this section</div>
                                :
                                null
                        }
                    </Row>:
                    <ContributorsContainer/>
                }
            </Container>
        )
    }
}

export default ListOfReposComponent;
