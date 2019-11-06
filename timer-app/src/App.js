import React from 'react';
import helpers from './helpers'
import './App.css';
class TimersDashboard extends React.Component{
    render(){
        return(
            <div className='ui three column centered grid'>
                {/*comes from framework Semantic UI*/}
                {/*included in the head of index.html*/}
                <div className= 'column'>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                        //used by the child component to determine
                        // whether to render a "+" of TimerForm
                        //when isOpen id true, the TimerForm id being displayed
                        />
                </div>
            </div>
        );
    }
}
class EditableTimerList extends React.Component{
    render(){
        return(
            <div id=' timers'>
                <EditableTimer
                    title = "Learn1"
                    project = "House Chores"
                    elapsed = "5456099"
                    id = "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7"
                    runningSince = {null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title = "Learn2"
                    project = "World Domination"
                    elapsed = "12345"
                    id = "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7"
                    runningSince = {null}
                    editFormOpen={true}
                />

            </div>
        );
    }
}
class EditableTimer extends React.Component{
    render(){
        if(this.props.editFormOpen){
            return(
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />);
        } else{
        return(
            <Timer
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                />
        );
        }
    }
}
class TimerForm extends React.Component{
    render(){
        const submitText = this.props.title? 'Update' : 'Create';
        //to determine what text the submit button should display
        // if title is not null, then it displays "Update"
        // otherwise it displays "Create"
        return(
            <div className='ui centered card'>
                <div className = 'content'>
                    <div className = 'ui form'>
                        <div className = 'field'>
                            <label> Title </label>
                            <input type='text' defaultValue={this.props.title}/>
                        </div>
                        <div className= 'field'>
                            <label>Project</label>
                            <input type = 'text' defaultValue={this.props.project}/>
                        </div>
                        <div className= 'ui two bottom attached buttons'>
                            <button className= 'ui basic blue button'>
                                {submitText}
                                {/*either 'Update'*/}
                                {/*    click 'edit' icon in Timer component*/}
                                {/*or 'Create'*/}
                                {/*    click '+' icon in Toggleable Component*/}
                            </button>
                            <button className='ui basic red button'>
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
    render() {
        if (this.props.isOpen) {
        return (
            <TimerForm />
            // does not receive any props from ToggleableTimerForm,
            // so its title and project field will be rendered empty
        );
        }else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon'>
                        <i className='plus icon'/>
                    </button>
                </div>
            );
        }
    }
}
class Timer extends React.Component{
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
                        <span className='right floated edit icon'>
                            <i  className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
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
