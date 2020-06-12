import React from 'react';

const ContentRepository = props => {
    const { type, content  } = props;

    switch (type) {
        case 'string':
            return (
                <p className="item.content">{content}</p>
                )
        case 'video':
            return (
                <div class="video">
                    <iframe class="responsive-iframe" src={content} frameborder="0" title="Youtube video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        default:
            return
    }
}

export default ContentRepository;

