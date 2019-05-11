import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import Remarkable from 'remarkable'
import { connect } from 'react-redux'
import {
    fetchPostsIfNeeded
} from '../redux/actions'

const notImage = [ 'self', 'default' ]
const getMarkup = text => {
    if (text) {
        const md = new Remarkable()
        return { __html: md.render(text)}
    } else {
        return { __html: ``}
    }    
}

class ViewPost extends Component {
    componentDidMount() {
        const {subreddit} = this.props.match.params;
        this.props.fetchPostsIfNeeded(subreddit)
    }

    renderPostBody = () => {
        const {match, posts} = this.props;
        if(posts) {
            if(posts.items.length) {
                let post = '';
                const {subredditID} = match.params;
                post = posts.items.filter(item => item.id === subredditID)[0];
                const {thumbnail, title, author, selftext} = post;

                console.log(post)

                return (
                    <Card.Content>
                        { !notImage.includes(thumbnail) && <Image floated='left' src={thumbnail}  size="tiny" />}
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>by {author}</Card.Meta>
                        <Card.Description dangerouslySetInnerHTML={getMarkup(selftext)} />
                    </Card.Content>
                )
            }
        }
        return;
    }

    render() {
        return (
            <Card style={{width: '100%'}}>
                {
                    this.renderPostBody() && this.renderPostBody()
                }
            </Card>
        )
    }
}

export default connect(
(state, ownProps) => {
    const {subreddit} = ownProps.match.params;
    return {
        posts: state.postsBySubreddit[subreddit]
    }
}, 
dispatch => ({
    fetchPostsIfNeeded: sub => dispatch(fetchPostsIfNeeded(sub))
}))(ViewPost)