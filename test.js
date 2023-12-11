const completeTodo = async (id) => {

    try {

       const temporaryTodos = [...todos];
       const index = temporaryTodos.findIndex(todo => todo.id === id);
       temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    
       const updatedTodo = {
         text: temporaryTodos[index].text,
         isCompleted: temporaryTodos[index].isCompleted
       }

       let options = {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(updatedTodo)
       };
 
       const resPut = await fetch(`${URL}/${id}`, options)
       
       if (!resPut.ok) {
         throw new Error('PUT failed')
       } 

       setTodos(temporaryTodos);
     
   } catch(error) {

     console.log(error.message)
   }
 }