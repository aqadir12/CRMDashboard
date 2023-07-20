import React, { useContext } from 'react';
import { MyContext } from '../App';

export default function Table() {
    const { text } = useContext(MyContext);
    const tableData = text.filter(x => x.type === 'table')[0].dataSource
    // get table column
    const column = Object.keys(tableData[0]);
    // get table heading data
    const ThData = () => {

        return column.map((data, i) => {
            return <th key={i}>{data}</th>
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