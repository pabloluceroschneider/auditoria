import React from 'react';
import Decision from './Decision'

const Body = props => {
    const { type, content  } = props;

    switch (type) {
        case 'string':
            return (
                <p className="item.content">{content}</p>
                )
        case 'video':
            return (
                <div class="video">
                    <iframe class="responsive-iframe" src={content} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )

    }
    return 
}

export default Body;

