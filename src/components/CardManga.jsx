import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardManga = ({ canonicalTitle, posterImage, averageRating, id }) => {
    return (
        <Card>
            <Image src={posterImage} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{canonicalTitle}</Card.Header>
                <Card.Meta>
                    <span className="date">{averageRating}</span>
                </Card.Meta>
                <Link to={`/manga/${id}`}>
                    <Icon name="book" />
                    details
                </Link>
            </Card.Content>
        </Card>
    )
}

export default CardManga
