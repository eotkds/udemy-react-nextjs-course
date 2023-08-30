function Modal() {
    return (
        <div className="shadow-xl rounded-md bg-white p-4 text-center w-[30rem] z-10 top-[20vh] fixed left-1/2">
            <p>Are you sure?</p>
            <button>Cancel</button>
            <button>Confirm</button>
        </div>
    );
}


export default Modal;