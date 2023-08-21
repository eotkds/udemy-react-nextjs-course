import Todo from "./components/Todo";


function App() {
  return (
    <div className="">
      <h1 className="text-[#333333] text-4xl font-bold my-2.5 mb-2.5">My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}

export default App;
