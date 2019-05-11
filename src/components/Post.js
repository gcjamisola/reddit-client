import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const notImage = [ 'self', 'default' ]

const Post = ({ id, subreddit, title, author, selftext, thumbnail }) => (
    <Card href={`/view/${subreddit}/${id}`} style={{width: '100%'}}>
        <Card.Content>
            { !notImage.includes(thumbnail) && <Image floated='left' src={thumbnail} rounded bordered size="tiny" />}
            <Card.Header>{title}</Card.Header>
            <Card.Meta>by {author}</Card.Meta>
        </Card.Content>
    </Card>
)

export default Post