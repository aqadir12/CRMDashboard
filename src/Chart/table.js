import React from 'react';
import { config } from '../configurator/configurator'
const tableData = config.widgets.filter(x => x.type === 'table').flat()[0].dataSource

export default function Table() {
    // get table column
    const column = Object.keys(tableData[0]);
    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th key={data}>{data}</th>
        })
    }
    // get table row data
    const tdData = () => {

        return tableData.map((data) => {
            return (
                <tr>
                    {
                        column.map((v, i) => {
                            return <td key={i}>{data[v]}</td>
                        })
                    }
                </tr>
            )
        })
    }
    return (
        <div style={{overflow: "auto"}}>
            <table className="my-3 table table-bordered table-responsive-sm table-striped">
                <thead>
                    <tr>{ThData()}</tr>
                </thead>
                <tbody>
                    {tdData()}
                </tbody>
            </table>
        </div>

    )
}