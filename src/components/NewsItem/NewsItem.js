import React from 'react';
import './NewsItem.css';
const NewsItem =(props) => {
    let {news, index, onClickEdit} = props
    return (
        <tr>
            <td>{index}</td>
            <td>{news.post_title}</td>
            <td>{news.post_author}</td>
            <td>{news.post_status}</td>
            <td><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffptshop.com.vn%2Fdien-thoai%2Fiphone-11-64gb&psig=AOvVaw2UyWqosQHaYBgjXq8_m1wr&ust=1600927092895000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiqsafM_usCFQAAAAAdAAAAABAE"></img></td>
            <td className="d-flex   flex-row">
                <button onClick={onClickEdit} type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-pen mr-2"></i> 
                Sửa
                </button>
                
                <div type="button" className="btn btn-danger d-flex flex-row"><i className="fas fa-box-open mr-2"></i> Xóa</div>
            </td>
        </tr>
    )
}
export default NewsItem;