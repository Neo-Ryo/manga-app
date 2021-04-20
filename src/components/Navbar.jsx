import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (name) => setActiveItem(name)

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
            </Menu>
        </div>
    )
}
