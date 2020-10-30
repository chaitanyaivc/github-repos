import React, {Component, Fragment} from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row,
    Col,
    ButtonGroup
} from 'reactstrap';
import './RepositoryComponent.css';

class RepositoryComponent extends Component {
    render() {
        const {name, description} = this.props.repoData;
        return(
            <Col md={4}>
                <Card className='cardBox'>
                    {/*<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*/}
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>{description}</CardText>
                        <ButtonGroup>
                            <Button color='primary'>Open</Button>
                            <Button color='success'>Add to favourites</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default RepositoryComponent;
