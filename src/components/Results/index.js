/* eslint-disable react/jsx-indent */
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './results.scss';

const Results = ({ items }) => {
  return (
    <Card.Group>
    {items.map((item) => (
      <Card key={item.id}>
      
        <Image src={item.owner.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
        Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
        22 Friends
          </a>
        </Card.Content>
      </Card>
    ))}
    </Card.Group>
  );
};

Results.propTypes = {
  items: PropTypes.array.isRequired,

};

export default Results;
