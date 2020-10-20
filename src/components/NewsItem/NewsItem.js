import React from 'react';
import './NewsItem.css';
const NewsItem =(props) => {
    let {news, index, onClickEdit, onClickDelete} = props
    return (
        <tr>
            <td>{index}</td>
            <td>{news.titleNews}</td>
            <td>{news.authorNews}</td>
            <td>{news.nameNews}</td>
            <td></td>
            <td className="d-flex   flex-row">
                <button onClick={onClickEdit} type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-pen mr-2"></i> 
                    Sửa
                </button>
                <div type="button" onClick={onClickDelete} className="btn btn-danger d-flex flex-row"><i className="fas fa-box-open mr-2"></i> Xóa</div>
            </td>
        </tr>
    )
}
export default NewsItem;