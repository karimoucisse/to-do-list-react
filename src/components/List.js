import React from 'react'

class List extends React.Component {
    render() {
        let newTask=this.props.tasks.map((task,index) => 
        <li key={index} className="d-flex justify-content-between fs-2 my-4 ps-3 border-start border-5 border-primary">
            
            {this.props.editeLine === index ? 
                (<input placeholder={task.description} autoFocus className="form"/>) : 
                (<span>{task.description}</span>) 
            }

            {this.props.editeLine === index ? 
                (<select>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>):
                (<span>status: {task.status}</span>)
            }

            {this.props.editeLine === index ?
                (<button className="btn btn-outline-success rounded-pill">Valider</button>):
                (<button className="btn btn-outline-danger rounded-pill"  onClick={() => this.props.onclickdelete(index)}>Supprimer</button>)
            }
            
            <button className="btn btn-outline-primary rounded-pill" onClick={() => this.props.onclickmodify(index)}>modifier</button>
        </li>)
        
        return (
            <ul>
                {newTask}
            </ul>
        )
    }
}
export default List
