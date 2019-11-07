import React from 'react';
import helpers from './helpers'
import './App.css';
const uuid = require('uuid/v4');
class TimersDashboard extends React.Component{
    state={
        timers:[
            {
                title:'practice squat',
                project:'Gym Chores',
                id: uuid.v4,
                elapsed:123456,
                runningSince:Date.now(),

            },
            {
                title:'bake squash',
                project:'kitchen chorse',
                id: uuid.v4,
                elapsed:23456,
                runningSince:null,

            }
        ],
    };
    handleCreateFormSubmit=(timer)=>{
        this.createTimer(timer);
    };
    createTimer=(timer)=>{
        const t=helpers.newTimer(timer);
        this.setState({
            timers:this.state.timers.concat(t),
        })
    };
    handleEditFormSubmit=(timer)=>{
        this.updateTimer(timer);
    };
    updateTimer=(attrs)=>{
        this.setState({
            timers:this.state.timers.map((timer)=>{
                if(timer.id===attrs.id){
                    return Object.assign({},timer,{
                        title:attrs.title,
                        project:attrs.project,
                    });
                }else{
                    return timer;
                }
            }),
        });
    };
    handleTrashClick=(timerId)=>{
        this.deleteTimer(timerId);
    };
    deleteTimer=(timerId)=>{
        this.setState({
            timer:this.state.timers.filter(t=>t.id!==timerId),
        });
    };
    render(){
        return(
            <div className='ui three column centered grid'>
                {/*comes from framework Semantic UI*/}
                {/*included in the head of index.html*/}
                <div className= 'column'>
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                    />
                    <ToggleableTimerForm
                        //isOpen={true}
                        //used by the child component to determine
                        // whether to render a "+" of TimerForm
                        //when isOpen id true, the TimerForm id being displayed
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}
class EditableTimerList extends React.Component{
    render(){
        //using map on the timers array to build a list of EditableTimer Components
        const timers=this.props.timers.map((timer)=>(
            <EditableTimer
                key = {timer.id}
                id = {timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince = {timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
            />
        ));
        return(
            <div id=' timers'>
                {timers}
            </div>
        );
    }
}
class EditableTimer extends React.Component{
    state={
        editFormOpen:false,
    };
    handleEditClick=()=>{
        this.openForm();
    };
    openForm=()=>{
        this.setState({editFormOpen:true});
    };
    handleFormClose=()=>{
        this.closeForm();
    };

    handleSubmit=(timer)=>{
        this.props.onFormSubmit(timer);
        this.closeForm();
    };
    closeForm=()=>{
        this.setState({editFormOpen:false});
    };

    render(){
        if(this.state.editFormOpen){
            return(
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />);
        } else{
        return(
            <Timer
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                onEditClick={this.handleEditClick}
                onTrashClick={this.props.onTrashClick}
                />
        );
        }
    }
}
class TimerForm extends React.Component{
    state={
        title:this.props.title || '',
        project:this.props.project || '',
    };
    handleTitleChange=(e)=>{
        this.setState(
            {title: e.target.value},
        );
    };
    handleProjectChange=(e)=>{
        this.setState({
            project: e.target.value},
            )
    };
    handleSubmit=()=>{
      this.props.onFormSubmit(
          {
          id:this.props.id,
          title:this.state.title,
          project:this.state.project,
      }
      );
    };
    render(){
        const submitText = this.props.id? 'Update' : 'Create';
        //to determine what text the submit button should display
        // if id is not null, then it displays "Update"
        // otherwise it displays "Create"

        return(
            <div className='ui centered card'>
                <div className = 'content'>
                    <div className = 'ui form'>
                        <div className = 'field'>
                            <label> Title </label>
                            <input type='text'
                                   defaultValue={this.state.title}
                                   onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className= 'field'>
                            <label>Project</label>
                            <input type = 'text'
                                   defaultValue={this.state.project}
                                   onChange={this.handleProjectChange}
                            />
                        </div>
                        <div className= 'ui two bottom attached buttons'>
                            <button
                                className= 'ui basic blue button'
                                onClick={this.handleSubmit}
                            >
                                {submitText}
                                {/*either 'Update'*/}
                                {/*    click 'edit' icon in Timer component*/}
                                {/*or 'Create'*/}
                                {/*    click '+' icon in Toggleable Component*/}
                            </button>
                            <button className='ui basic red button'
                                    onClick={this.props.OnFormClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class ToggleableTimerForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.handleFormOpen = this.handleFormOpen.bind(this);
    // }
    state={
        isOpen:false,
    };
    // handleFormOpen(){
    //     this.setState({
    //         isOpen:true,
    //     })
    // }
    handleFormOpen=()=>{
        this.setState({
            isOpen:true,
        })
    };
    handleFormClose=()=>{
        this.setState({
            isOpen:false
        });
    };
    handleFormSubmit=(timer)=>{
        this.props.onFormSubmit(timer);
        this.setState({isOpen:false});
    };
    render() {
        if (this.state.isOpen) {
        return (
            < TimerForm
                onFormSubmit = {this.handleFormSubmit}
                onFormClose={this.handleFormClose}

            />
            // does not receive any props from ToggleableTimerForm,
            // so its title and project field will be rendered empty
        );
        }else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={this.handleFormOpen}
                    >
                        <i className='plus icon'/>
                    </button>
                </div>
            );
        }
    }
}
class Timer extends React.Component{
    handleTrashClick=()=>{
        this.props.onTrashClick(this.props.id);
    };
    render(){
        const elapsedString = helpers.renderElapsedString(this.props.elapsed);

        return(
            <div className= 'ui centered card'>
                <div className= 'content'>
                    <div className= 'header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'
                              onClick={this.props.onEditClick}
                        >
                            <i  className='edit icon'/>
                        </span>
                        <span className='right floated trash icon'
                              onClick={this.handleTrashClick}

                        >
                            <i className='trash icon'/>
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        );
    }
}
class App extends React.Component {
  render() {
    return (
        <div className="App">

            < TimersDashboard/>


        </div>
    );
  }
}

export default App;
