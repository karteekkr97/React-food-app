import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log(this.props.name+"Child Constructor")
    }
    componentDidMount()
    {
      console.log(this.props.name + "Child didmount")
    }
  render() {
   
    const {name,location}=this?.props;
    const {count}=this?.state;
    console.log(this.props.name+"Child Render")
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>Increase Count
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:76802542</h4>
      </div>
    );
  }
}

export default UserClass;