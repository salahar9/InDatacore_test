// EditModal.tsx

import React, { useState } from 'react';

interface EditModalProps {
    showEditModal: boolean;
    setShowEditModal: (b: boolean) => void;
}

const EditModal = ({ setData, data, showEditModal, setShowEditModal, selectedRow, setSelectedRow }) => {
    const [editedName, setEditedName] = useState('');
    const [editedAge, setEditedAge] = useState('');


    const handleSaveEdit = (newObj) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[selectedRow.id] = newObj;
            return newData;
        });


        handleCloseEditModal();
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedRow(null);
    };


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(e.target.value);
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedAge(e.target.value);
    };

    const handleSaveChanges = () => {
        const age = parseInt(editedAge);

        if (editedName && !isNaN(age)) {
            handleSaveEdit({ id: selectedRow.original.id, name: editedName, age });
            setEditedName('');
            setEditedAge('');
            handleCloseEditModal();
        } else {
            alert('Please enter valid name and age!');
        }
    };

    return (
        <div className={`modal ${showEditModal ? 'show' : ''}`} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Employee</h5>
                        <button type="button" className="close green" data-dismiss="modal" aria-label="Close" onClick={handleCloseEditModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="editedName">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editedName"
                                    value={editedName}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="editedAge">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="editedAge"
                                    value={editedAge}
                                    onChange={handleAgeChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseEditModal}>
                            Close
                        </button>
                        <button type="button" className="btn green  text-light" onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
