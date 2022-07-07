import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Todo from "./TodoApp/Todo"
function App() {
  return (
    <>
     <Provider store={Store}>
       
      <Todo/>
    
     </Provider>
    </>
  );
}

export default App;
