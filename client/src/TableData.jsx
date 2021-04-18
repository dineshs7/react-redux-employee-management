import React from 'react';
import { connect } from 'react-redux';

class TableData extends React.Component {
    render() {
        var employees = this.props.stateData.user;
        return (
            <table className="table-data">
                <caption className="primary-heading">EMPLOYEES DETAILS</caption>
                <thead>
                    <tr>
                        {
                            Object.keys(employees[0]).map((key) =>
                                <th key={key}>{key}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(employees).map((key) =>
                            <tr key={key}>{
                                Object.values(employees[key]).map((value, index) =>
                                    <td key={index}>{value}</td>
                                )
                            }</tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(TableData);