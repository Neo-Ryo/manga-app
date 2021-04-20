import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardMangaDescription = ({
    canonicalTitle,
    posterImage,
    averageRating,
    description,
}) => {
    return (
        <Card>
            <Image src={posterImage} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{canonicalTitle}</Card.Header>
                <Card.Meta>
                    <span className="date">{averageRating}</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CardMangaDescription
