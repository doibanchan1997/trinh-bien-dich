import React from 'react';
const NewsList =  (props) => {
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
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