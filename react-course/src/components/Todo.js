function Todo(props) {
    return (
        <div className="bg-white rounded-[4px] p-4 w-80 shadow">
            <h2 className="text-[#333333] text-2xl font-bold">{props.text}</h2>
            <div className="text-right">
                <button className="font-inherit px-6 py-2 cursor-pointer rounded-[4px] bg-[#800040] text-white m-0 mx-4 border-solid border border-[#800040] hover:border-[#9c1458] hover:bg-[#9c1458]">Delete</button>
            </div>
        </div>
    );
}

export default Todo;