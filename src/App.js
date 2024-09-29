import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";


function App() {
  return (
    <>
    <h1 className='text-red-700 my-4 capitalize text-3xl text-center font-bold'>creating todo with redux toolkit in create-react-app(CRA)</h1>
    <TodoForm/>
    <Todos/>
    </>
  );
}

export default App;
