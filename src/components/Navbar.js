import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const subredditArr = [
    'reactjs',
    'frontend',
    'webdev',
    'javascript',
    'open source',
    'programming',
    'learn javascript'
];

const Navbar = ({selectedSub, handleMenuChange, handleRefreshClick}) => (
    <div style={{ margin: '1rem' }}>
        <Menu pointing secondary>
            {
                subredditArr.map((subreddit, key) => 
                    <Menu.Item 
                        key={key}
                        name={subreddit} 
                        active={selectedSub === subreddit.replace(/\s/g, '')} 
                        onClick={handleMenuChange} 
                    />  
                )
            }
            <Menu.Menu position='right'>
                <Menu.Item onClick={() => handleRefreshClick()}><Icon name='refresh' /></Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
)

export default Navbar