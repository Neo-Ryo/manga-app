import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container } from 'semantic-ui-react'
import CardMangaDescription from './CardMangaDescription'
import { useParams } from 'react-router'

// https://kitsu.io/api/edge/anime/:id

export default function MangaDescription() {
    const [manga, setManga] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams()

    const getManga = async () => {
        try {
            setIsLoading(true)
            const res = await Axios.get(`https://kitsu.io/api/edge/anime/${id}`)
            setManga(res.data.data.attributes)
            // console.log(res.data.data.attributes)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getManga()
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <Container>
            <h1>Manga Description</h1>
            <CardMangaDescription
                canonicalTitle={manga.canonicalTitle}
                // posterImage={manga.coverImage.large}
                averageRating={manga.averageRating}
                description={manga.description}
            />
        </Container>
    )
}
