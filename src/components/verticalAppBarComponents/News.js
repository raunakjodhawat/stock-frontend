import * as React from 'react';

function News({ news }) {
    if (news && Object.keys(news).length > 0) {

        return (
            <div className="App">
                <table>
                    <tbody>
                        {
                            news.filter((item) => item.image && item.headline && item.summary && item.url).map((newsItem, index) => {
                                console.log(newsItem);
                                return (
                                    <div key={index}>
                                        <tr>
                                            <td><img src={newsItem.image} height="150px" width="150px" /></td>
                                            <td><strong>{newsItem.headline}</strong></td>
                                            <td>{newsItem.summary} <br />
                                            <a href={newsItem.url}>read more</a></td>
                                            <br />
                                        </tr>
                                    </div>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    } else {
        return (
            <div />
        )
    }

}

export default React.memo(News);
