import React from 'react'

class List extends React.Component {

    constructor() {
        super()

        this.state = {
           task:""
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ task : e.target.value})
        console.log(this.state.task);
    }
    handleSubmit(e){
        e.preventDefault()

    }

    render() {
        let newTask=this.props.tasks.map((task,index) => 
        <li key={index} className="border-start border-5 border-primary d-flex justify-content-between fs-2 my-4 ps-3">

            {/* <form className= "d-flex justify-content-between fs-2 my-4 ps-3" onSubmit={this.handleSubmit}> */}
                
                {this.props.editeLine === index ? (
                        <input 
                            defaultValue={task.description} 
                            autoFocus 
                            className="form" 
                            type="text" 
                            onChange={this.handleChange}
                        />
                    ) : (
                        <span>{task.description}</span>
                    ) 
                }

                {this.props.editeLine === index ? 
                    (<select>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>)
                    : (<span>status: {task.status}</span>)
                }

                {this.props.editeLine === index ? (
                        <button 
                            className="btn btn-outline-success rounded-pill" 
                            onClick={() => this.props.onclickvalid(index,this.state.task)}
                        >
                            Valider
                        </button>
                    ) : (
                        <button 
                            className="btn btn-outline-danger rounded-pill" 
                            onClick={() => this.props.onclickdelete(index)}
                        >
                            Supprimer
                        </button>
                    )
                }
                
                <button className="btn btn-outline-primary rounded-pill" 
                onClick={() => this.props.onclickmodify(index)}>modifier</button>

            {/* </form> */}

        </li>)
        
        return (
            <ul>
                {newTask}
            </ul>
        )
    }
}
export default List
