import React from 'react';
const NewsItem =(props) => {
    let {news, index} = props
    console.log(news);
    return (
        <tr>
            <td>{news.index}</td>
            <td>{news.title}</td>
            <td>{news.description}</td>
            <td>30</td>
            <td>2010/07/14</td>
            <td>$86,500</td>
        </tr>
    )
}
export default NewsItem;