import React from 'react';
import Form from "./components/Form"
import List from './components/List';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      tasks: [],
      editeLine : null
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
  }

  addTask(string) {
    this.setState({tasks: [{description: string, status: "To do"},...this.state.tasks]})
    console.log(this.state.tasks);
  }
  deleteTask(index){
    const array = this.state.tasks
    array.splice(index,1)
    this.setState({tasks:array})
      //  console.log(index); 
      //  console.log(this.state.tasks);
  }
  modifyTask(index) {
    // const array = this.state.tasks
    // array.splice(index,1)
    this.setState({editeLine:index})
    console.log(index);

  }

  render() {
    return(
      <div className="container py-5 ">
        <h1 className="mb-5 text-center">To-do List</h1>
        <Form addTask={this.addTask}/>
        <List tasks={this.state.tasks}  
        onclickdelete={this.deleteTask} 
        onclickmodify={this.modifyTask}
        editeLine={this.state.editeLine}/>
      </div>
    )
  }
}

export default App;
