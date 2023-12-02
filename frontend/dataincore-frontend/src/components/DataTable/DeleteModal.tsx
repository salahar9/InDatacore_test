const DeleteModal = ({ data, setData, showDeleteModal, setShowDeleteModal, setSelectedRow, selectedRow }) => {
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedRow(null);
    };


    const handleConfirmDelete = () => {
        const newTableData = data.filter(item => item.id !== selectedRow.original.id);
        setData(newTableData)
        handleCloseDeleteModal();
    };
    return (<div className={`modal ${showDeleteModal ? 'show' : ''}`} role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirm Deletion</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseDeleteModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this row?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>
                        Close
                    </button>
                    <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    </div>)
}
export default DeleteModal