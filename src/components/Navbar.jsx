import React, { useContext, useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ThemingApp } from '../App'

export default function Navbar() {
    const { setMyTheme, myTheme } = useContext(ThemingApp)
    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (name) => setActiveItem(name)

    // useEffect(() => {
    //     console.log('CONTEXT ==> ', setAppTheme)
    // }, [])

    return (
        <div>
            <Menu pointing secondary>
                <Link to="/">
                    <Menu.Item
                        as="span"
                        name="home"
                        active={activeItem === 'home'}
                        onClick={() => handleItemClick('home')}
                    />
                </Link>
                <Link to="contact">
                    <Menu.Item
                        as="span"
                        name="contact"
                        active={activeItem === 'contact'}
                        onClick={() => handleItemClick('contact')}
                    />
                </Link>
                <Menu.Menu position="right">
                    <Menu.Item
                        name={myTheme}
                        onClick={() => setMyTheme('darkMode')}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}
