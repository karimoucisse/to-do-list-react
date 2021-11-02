import React from 'react'

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTaskDescriptionChange(e) {
        this.setState({ task : e.target.value})
        console.log(this.state.task);
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({task:""})
        this.props.addTask(this.state.task)
        // console.log(this.props.addTask(this.state.task));
    }


    render() {
        // const {addTask} = this.props
        return(
            <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                <input type="text" className="form col-3 me-3" placeholder="Task" onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
                <button type="submit" className="btn btn-outline-primary col-1">Submit</button>
            </form>
        )
    }
}

export default Form