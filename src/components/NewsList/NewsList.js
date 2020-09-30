import React from 'react';
const NewsList =  (props) => {
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" width="100%">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th> Tieu De</th>
                    <th>Tac Gia</th>
                    <th>Trang Thai</th>
                    <th>Ngay Dang</th>
                    <th>Thao Tac</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>STT</th>
                    <th> Tieu De</th>
                    <th>Tac Gia</th>
                    <th>Trang Thai</th>
                    <th>Ngay Dang</th>
                    <th>Thao Tac</th>
                    </tr>
                </tfoot>
                <tbody>
                {props.children}
                </tbody>
                </table>
            </div>
            </div>
    )
}
export default NewsList;