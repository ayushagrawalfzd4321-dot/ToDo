import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { v4 as uuidv4 } from "uuid";

function Home() {
    
    const [todo, setodo] = useState("");
    const [todos, settodos] = useState(() => {
        const savetodo = JSON.parse(localStorage.getItem("todos"));
        return savetodo ? savetodo : [];
    },[])
 
  useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
 
  const handleadd = () => {
    if (todo.trim() === "") {
      alert("Please enter a todo");
      
    }
    else {
      
      settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setodo("");
    }
};
  const handleChange = (e) => {
    setodo(e.target.value);
    
  };
  const handleedit = (e, id) => {
    let t = todos.filter((item) => item.id == id);
    setodo(t[0].todo);
    let newtodos = todos.filter((item) => item.id !== id);
    settodos(newtodos);
  };
  const handledelete = (e, id) => {
    // e.target.parentElement.parentElement.remove();  --> avoid it since modifies the original array
    if (confirm("Are you sure you want to delete this todo ?")) {
        
        let newtodos = todos.filter((item) => {
        return item.id !== id;
      });
      settodos(newtodos);
    }
  };
  const handleenter = (e) => { 
    if (e.key === "Enter") {
        handleadd();
    }

}
const handlecheck = (e) => {
    let id = e.target.name;
    
    
    // settodos(todos.map(item => {
        //   if (item.id == id)
    //   {
    //     return {
        //       ...item,
        //       isCompleted:!item.isCompleted
        //   };
        
    //   }
    //   return item;
    // }
    // ))
    //easy way
    
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos);
};

return (
  <>
    

      <Navbar />
<div className="flex min-h-screen flex-col">
      <div className="max-w-[450px] mx-auto grow  flex-col   secondary  w-full rounded-md p-2 my-10">
        <div className="flex justify-center">
          <h1 className="font-black mr-5 text-lg">Add a Todo</h1>
          <input
            onKeyDown={handleenter}
            onChange={handleChange}
            className="w-1/2 h-10  bg-white rounded-md px-2"
            type="text"
            value={todo}
            placeholder="Enter your todo here......."
            />
          <button
            onClick={handleadd}
            className="bg-cyan-700  cursor-pointer hover:bg-blue-900 text-amber-50 px-4  font-bold rounded-xl  mx-2  "
            >
            Save
          </button>
        </div>
        <div className="mt-5 flex flex-col">

          <h2 className="font-black text-lg  text-center">Your Todos</h2>
          <hr/>
          {todos.length === 0 && (
            <div className="m-5 flex-1 flex justify-center items-center">No Todos to Display !</div>
          )} 
          {todos.map((todo) => {
            return (
              <div
              key={todo.id}
                className="todos primary my-2 mx-auto w-3/4  max-w-3/4 pl-2 py-2 rounded-lg justify-between flex"
              >
                <input
                  className=" w-4"
                  type="checkbox"
                  name={todo.id}
                  checked={todo.isCompleted}
                  onChange={handlecheck}
                />
                <div className={todo.isCompleted ? "line-through" : ""}>
                  {todo.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={(e) => handleedit(e, todo.id)}
                    className="bg-cyan-700 cursor-pointe  hover:bg-blue-900 text-sm text-amber-50 px-2 py-1 font-bold rounded-xl   "
                    >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handledelete(e, todo.id)}
                    className="bg-cyan-900 cursor-pointer  text-amber-50 text-sm py-1 px-2 hover:bg-blue-900 font-bold rounded-xl mx-1  "
                    >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <Footer/>
     
         </div>
    </>
  );
}

export default Home;