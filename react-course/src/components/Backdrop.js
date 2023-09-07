function Backdrop(props) {
    return (
        <div className="fixed z-[1] bg-black/75 w-full h-[100vh] top-0 left-0" onClick={props.onCancel}></div>
    );
}


export default Backdrop;