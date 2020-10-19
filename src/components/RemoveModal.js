import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        isOpen={!!props.removeButtonClicked}
        // isOpen={true}
        onRequestClose={props.handleRemoveNo}
        contentLabel="RemoveExpense"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        appElement={app}
    >
        <h3 className="modal__title">Remove Expense</h3>
        <p>Are you sure you want to remove expense?</p>
        <button className="button" onClick={props.handleRemoveYes}>Yes</button>
        <button className="button" onClick={props.handleRemoveNo}>No</button>
    </Modal>
);

export default RemoveModal;