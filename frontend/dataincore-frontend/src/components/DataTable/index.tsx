
import React, { useState } from 'react';
import { useTable } from 'react-table';
import "./DataTable.css"
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
const DataTablePage: React.FC = () => {
    const [data, setData] = useState(
        [
            { id: 1, name: 'Salah Eddine', age: 22 },
            { id: 2, name: 'Ahmad Belhiak', age: 30 },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Age', accessor: 'age' },
            {
                Header: 'Actions',
                Cell: ({ row }: { row: any }) => (
                    <div className="d-flex">
                        <button className="btn text-light btn-sm green  rounded" onClick={() => handleEdit(row)}>
                            Edit
                        </button>
                        <button className="btn  btn-sm btn-danger  rounded" onClick={() => handleDelete(row)}>
                            Delete
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any | null>(null);

    const handleEdit = (row: any) => {
        setSelectedRow(row);
        setShowEditModal(true);
    };
    const handleDelete = (row: any) => {
        setSelectedRow(row);
        setShowDeleteModal(true);
    };

    return (
        <div className="flex-grow-1 p-3">
            <h2>Employee Table</h2>
            <table {...getTableProps()} className="table">
                <thead className="thead-light">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>


            <EditModal data={data} setData={setData} showEditModal={showEditModal} setShowEditModal={setShowEditModal} selectedRow={selectedRow} setSelectedRow={setSelectedRow} />

            <DeleteModal data={data} setData={setData} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} setSelectedRow={setSelectedRow} selectedRow={selectedRow} />

        </div>
    );
};

export default DataTablePage;
