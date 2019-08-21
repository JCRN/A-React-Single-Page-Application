import React from "react";
import { Card, Label } from "semantic-ui-react";

export default function LocationCard({ location }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Meta>
          <span className="location-type-dimension">{`${location.type} - ${
            location.dimension
          }`}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Label attached="bottom right">
          {location.residents.length} residents
        </Label>
      </Card.Content>
    </Card>
  );
}
