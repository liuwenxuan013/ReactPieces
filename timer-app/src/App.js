/*
eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
no-undef, jsx-a11y/label-has-for, react/jsx-first-prop-new-line
*/
import React from 'react';
import helpers from './helpers'
import client from './client'

class TimersDashboard extends React.Component{
    state={
            timers:[],
        };

    componentDidMount(): void {
        client.getTimers(timers=>
        this.setState({timers}
        ));
    }
    handleCreateFormSubmit=(timer)=>{
        this.createTimer(timer);
    };
    handleEditFormSubmit=(timer)=>{
        this.updateTimer(timer);
    };
    handleTrashClick=(timerId)=>{
        this.deleteTimer(timerId);
    };
    handleStartClick=(timerId)=>{
        this.startTimer(timerId);
    };
    handleStopClick=(timerId)=>{
        this.stopTimer(timerId);
    };
    createTimer=(timer)=>{
        const t=helpers.newTimer(timer);
        this.setState({
            timers:this.state.timers.concat(t),
        })
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
    deleteTimer=(timerId)=>{
        this.setState({
            timer:this.state.timers.filter(t=>t.id!==timerId),
        });
        console.log(this.state.id+'id deleted');
    };
    startTimer=(timerId)=>{
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === timerId){
                    return Object.assign({},timer,{
                        runningSince:now,
                    });
                }else{
                    return timer;
                }
        }),
    });
    client.startTimer(
        {
            id:timerId,
            stop:now
        }
    );
    };
    stopTimer=(timerId)=>{
        const now= Date.now();
        this.setSate({
            timers:this.state.timers.map((timer)=>{
                if(timer.id===timerId) {
                    return Object.assign({},timer,{
                        elapsed:timer.elapsed + lastElapsed,
                        runningSince: null,
                    });

                }else{
                    return timer;
                }
            }),
        });
        client.stopTimer({
            id:timerId,
            stop:now
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
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
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
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
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
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
                />
        );
        }
    }
}
class ToggleableTimerForm extends React.Component{

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

class Timer extends React.Component{
    componentDidMount(): void {
        this.forceUpdateInterval = setInterval(()=>this.forceUpdate(),50);
    }
    componentWillUnmount(): void {
            clearInterval(this.forceUpdateInterval);
    }
    handleStartClick=()=>{
            this.props.onStartClick(this.props.id);
    };
    handleStopClick=()=>{
        this.props.onStopClick(this.props.id);
    };
    handleTrashClick=()=>{
        this.props.onTrashClick(this.props.id);
        console.log('this is'+ this.props.id);
    };
    render(){
        const elapsedString = helpers.renderElapsedString(this.props.elapsed,this.props.runningSince);

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
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}

                />
            </div>
        );
    }
}
class TimerActionButton extends React.Component{
    render(){
        if(this.props.timerIsRunning){
            return(
                <div
                    className = 'ui bottom attached red basic button'
                    onClick={this.props.onStopClick}
                    >
                    Stop
                </div>

            );

        }else{
            return(
                <div
                    className = 'ui bottom attached green basic button'
                    onClick={this.props.onStartClick}
                    >
                    Start
                </div>
            );
        }

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
