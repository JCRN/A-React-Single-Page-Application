import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <Card.Content header={episode.name} />
      <Card.Content description={episode.episode} />
      <Card.Content extra>Air Date: {episode.air_date}</Card.Content>
    </Card>
  );
}
