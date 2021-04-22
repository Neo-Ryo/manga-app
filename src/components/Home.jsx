import React, { useContext, useEffect, useState } from 'react'
import { Input, Container, Grid } from 'semantic-ui-react'
import Axios from 'axios'
import CardManga from './CardManga'
import { ThemingApp } from '../App'

export default function Home() {
    const { myTheme } = useContext(ThemingApp)
    const [inputValue, setInputValue] = useState('')
    const [mangas, setMangas] = useState([])

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const getManga = async () => {
        const res = await Axios.get(
            `https://kitsu.io/api/edge/anime?filter[text]=${inputValue}`
        )
        setMangas(res.data.data)
    }

    useEffect(() => {
        getManga()
    }, [inputValue])

    return (
        <Container>
            <h1>HOME {myTheme}</h1>
            <Input
                placeholder="Search..."
                value={inputValue}
                onChange={handleChangeInput}
            />
            <Grid columns={3}>
                <Grid.Row>
                    {mangas.map((manga, i) => (
                        <Grid.Column key={i}>
                            <CardManga
                                canonicalTitle={manga.attributes.canonicalTitle}
                                posterImage={manga.attributes.posterImage.small}
                                averageRating={manga.attributes.averageRating}
                                id={manga.id}
                            />
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </Container>
    )
}
