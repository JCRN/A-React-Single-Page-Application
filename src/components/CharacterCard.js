import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard({ character }) {
  const { image, name, species, status, location, origin } = character;

  return (
    <div className="character-card">
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content className="character-content">
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="character-species">{species}</span>
            <span className="character-status">{status}</span>
          </Card.Meta>
          <Card.Description>
            <p className="character-location">Location: {location.name}</p>
            <p className="character-origin">Origin: {origin.name}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Episodes
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
