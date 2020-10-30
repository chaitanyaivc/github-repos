import React, {Component} from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Col,
    ButtonGroup
} from 'reactstrap';
import './RepositoryComponent.css';

class RepositoryComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        let addOrRemove = event.target.name;
        if (addOrRemove === 'add') {
            this.props.addFavouriteRepos(this.props.repoData);
        } else if (addOrRemove === 'remove') {
            this.props.removeFavouriteRepos(this.props.repoData);
        } else {
            this.props.enableMainContent(this.props.repoData);
        }
    }

    render() {
        const {name, description, addedToFav} = this.props.repoData;
        return(
            <Col md={4}>
                <Card className='cardBox'>
                    {/*<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*/}
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                        <CardText>{description? description : 'No description available for this repo.'}</CardText>
                        <ButtonGroup>
                            <Button
                                color='primary'
                                onClick={this.handleClick}
                            >
                                Open
                            </Button>
                            <Button
                                color={addedToFav ? 'danger' : 'success'}
                                onClick={this.handleClick}
                                name={addedToFav ? 'remove' : 'add'}
                            >
                                {addedToFav ? 'Remove from favourites' : 'Add to favourites'}
                            </Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default RepositoryComponent;
