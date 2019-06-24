

// eslint-disable-next-line no-undef
import React from "react";

export default class TimersDashBoard extends React.Component {
  uuid;
  state = {
    timers:[
      {
        title: 'React Study',
        project: 'React',
        // eslint-disable-next-line no-undef
        id: this.uuid.v4(),
        elapsed: 545000,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        // eslint-disable-next-line no-undef
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],};
  handleCreateFormSubmit = (timer) =>{
    this.createTimer(timer);
  };
  handleEditFormSubmit = (timer) => {
    this.updateTimer(timer);
  };
  handleTrashClick = (timerId) =>{
    this.deleteTimer(timerId);
  };
  onStartClick=(timerId)=>{
    this.startTimer(timerId);
  };
  onStopClick=(timerId)=>{
    this.stopTimer(timerId);
  }
  createTimer = (timer) => {
    // eslint-disable-next-line no-undef
    const t = helpers.newTimer(timer);
    this.setState({
      timers:this.state.timers.concat(t),
    });
  };
  UpdateTimer = (attr )=> {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attr.id) {
          return Object.assign({}, timer,
              {
                title: attr.title,
                project: attr.project,
              });
        } else {
          return timer;
        }

      }),
    });
  };
  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId),
    });
  };
  startTimer=(timerId) => {
    const now = Date.now();
    this.setState({
      timers:this.state.timers.map((timer) => {
        if(timer.id === timerId) {
          return Object.assign({},timer,
              {runningSince:now,
              });
        }else{
          return timer;
        }
      }),

    });
  };
  stopTimer=(timerId) => {
    const now=Date.now();
    this.setState({
      timers: this.state.timers.map((timer)=>{
        if(timer.id === timerId){
          const lastElapsed = now - timer.runningSince;
          return Object.assign({},timer,
              {elapsed:timer.elapsed+lastElapsed,
                runningSince:null,
              });
        }else{
          return timer;
        }
      }),
    });
  };
  render() {
    return (
        <div className='ui three column centered grid'>
          <div className='column'>
            <EditableTimerList
                timers={this.state.timers}
                onFormSubmit={this.handleEditFormSubmit}
                onTrashClick={this.handleTrashClick}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
            />
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ToggleableTimerForm
                onFormSubmit={this.handleCreateFormSubmit}
            />
          </div>
        </div>
    );
  }

  updateTimer(timer) {

  }
}
class ToggleabeTimerForm extends React.Component {
  state = {
    isOpen: false,
  };
  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };
  handleFormClose = () => {
    this.setState({
      isOpen: false
    });
  };
  handleFormSubnmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({isOpen: false});
  };
  render() {
    if (this.state.isOpen) {
      return (

          <TimerForm
              onFormSubmit={this.handleFormSubmit}
              onFormClose={this.handleFormClose}
          />
      );

    } else {
      return (
          <div className='ui basic content center aligned segment'>
            <button
                className='ui basic button icon'
                onClick={this.handleFormOpen}
            >
              <i className='plus icon'> + </i>
            </button>
          </div>
      );
    }

  }
}
class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
        <EditableTimer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            onFormSubmit={this.props.onFormSubmit}
            onFormClick={this.props.onTrashClick}
            onStartClick={this.props.onStartClick}
            onStopClick={this.props.onStopClick}
        />
    ));
    return (
        <div id='timers'>
          {timers}
        </div>
    );
  }
}
class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };
  handleEditClick = () => {
    this.openForm();
  };
  handleFormClose = () => {
    this.closeForm();
  };
  handleSubmit = (timer) =>{
    this.props.onFormSubmit(timer);
    this.closeForm();
  };
  openForm=()=>
      this.setState({editFormOpen:true});
  closeForm=()=>
      this.setState({editFormOpen:false});

  render() {
    if (this.state.editFormOpen) {
      return (
          <TimerForm
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
              onFormSubmit={this.handleSubmit}
              onFormClose={this.handleFormClose}
          />
      );
    } else {
      return (
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
  };
}
class Timer extends React.Component{
  componentDidMount(){
  }
}









