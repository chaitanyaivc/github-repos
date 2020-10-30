import React, {Component, Fragment} from 'react';
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

    handleClick = () => {
        console.log('clicked');
        this.props.addFavouriteRepos(this.props.repoData);
    }

    render() {
        const {name, description} = this.props.repoData;
        // console.log('clicker: ', this.handleClick);
        return(
            <Col md={4}>
                <Card className='cardBox'>
                    {/*<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*/}
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                        <CardText>{description? description : 'No description available for this repo.'}</CardText>
                        <ButtonGroup>
                            <Button color='primary' onClick={this.handleClick}>Open</Button>
                            <Button color='success' onClick={this.handleClick}>Add to favourites</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default RepositoryComponent;
