import React from 'react';
import Option from './Option';

const ContentRepository = props => {
    const { type, content } = props;

    switch (type) {
        case 'string':
            return (
                <p className="item.content">{content}</p>
                )
        case 'video':
            return (
                <div className="video">
                    <iframe className="responsive-iframe" src={content} frameBorder="0" title="Youtube video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )
        case 'decision':
            const { opA, opB } = content;
            const { handlePag } = props;
            return (
                <div className="decision">
                    <Option {...opA} handlePag={handlePag} />
                    <Option {...opB} handlePag={handlePag} />
            </div>
            )
        case 'image':
            const logo = require(`../assets/${content}`);
            return (
                <img className="image" src={logo} alt={"Img No Disponible"}/>
            )
        case 'lista':
            return (
                <ol>
                    {content.map( li => {
                        return <li>{li}</li>
                    })}
                </ol>
            )
        default:
            return
    }
}

export default ContentRepository;

