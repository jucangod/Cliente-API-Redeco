import React from 'react';

function CustomTable({ headers, data }) {
    return (
        <div className="custom-table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="table-header">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={headers.length} className="no-data">
                                No hay quejas para mostrar
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex} className="table-cell">
                                        {row[header.toLowerCase().replace(' ', '')] || '-'}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export { CustomTable };