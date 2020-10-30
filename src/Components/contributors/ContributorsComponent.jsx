import React, {Component} from 'react';
// import { Row } from 'reactstrap';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Container,
    Col,
    CardHeader
} from 'reactstrap';
import './ContributorsComponent.css';

class ContributorsComponent extends Component {
    render() {
        const {dataOfARepo} = this.props;
        return(
            <Container className='contributorsComponent'>
                <Card>
                    <CardBody>
                        <CardTitle className='contributorCardTitle'>{dataOfARepo.full_name.toUpperCase()}</CardTitle>
                        <CardImg top className='avatarImage' width="100%" src={dataOfARepo.owner.avatar_url} alt="Card image cap" />
                        <Row className='contributorCardRow'>
                            <Col>
                                <CardHeader>Repo Name</CardHeader>
                                <CardText>{dataOfARepo.name}</CardText>
                                <CardHeader>Default branch</CardHeader>
                                <CardText>{dataOfARepo.default_branch}</CardText>
                                <CardHeader>Created at</CardHeader>
                                <CardText>{dataOfARepo.created_at}</CardText>
                                <CardHeader>Clone url</CardHeader>
                                <CardText>{dataOfARepo.clone_url}</CardText>
                                <CardHeader>No of watchers</CardHeader>
                                <CardText>{dataOfARepo.watchers}</CardText>
                            </Col>
                            <Col>
                                <CardHeader>Description</CardHeader>
                                <CardText>{dataOfARepo.description}</CardText>
                                <CardHeader>No of forks</CardHeader>
                                <CardText>{dataOfARepo.forks}</CardText>
                                <CardHeader>Updated at</CardHeader>
                                <CardText>{dataOfARepo.updated_at}</CardText>
                                <CardHeader>SSH</CardHeader>
                                <CardText>{dataOfARepo.ssh_url}</CardText>
                                <CardHeader>License</CardHeader>
                                <CardText>{dataOfARepo.license? dataOfARepo.license.name : 'Not Available'}</CardText>
                            </Col>
                        </Row>
                        <Button color='success' onClick={this.props.disableMainContent}>Back</Button>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default ContributorsComponent;
