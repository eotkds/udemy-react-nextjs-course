function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }
    return (
        <div className="shadow-xl rounded-md bg-white p-4 text-center w-[30rem] z-10 top-[20vh] fixed left-[calc(50%-15rem)]">
            <p>Are you sure?</p>
            <button className="btn btn--alt hover:bg-[#f8dae9] hover:border-[#9c1458]" onClick={cancelHandler}>Cancel</button>
            <button className="btn hover:bg-[#f8dae9] hover:border-[#9c1458]" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}


export default Modal;