import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        isOpen={!!props.removeButtonClicked}
        onRequestClose={props.handleRemoveCancel}
        contentLabel="RemoveExpense"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        appElement={app}
    >
        <h3 className="modal__title">Remove Expense</h3>
        <p>Are you sure you want to remove expense?</p>
        <div className="input-group modal__inputs">
            <button className="button button--confirm button--hover-darken" onClick={props.handleRemoveConfirm}>Remove</button>
            <button className="button button--secondary button--hover-darken" onClick={props.handleRemoveCancel}>Cancel</button>
        </div>
    </Modal>
);

export default RemoveModal;