import React from "react";

export default class Sidebar extends React.Component {

    state ={
        collapsed: false,
        allLists: [],
    }

    currentClasses =() =>{
        return this.state.collapsed ? "sidebar" : "sidebar collapsed"
    }

    toggleCollapse = () =>{
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    
    render(){
        const {collapsed} = this.state
        return (
        <div className={this.currentClasses()}>
            <button onClick={this.toggleCollapse}>{collapsed ? "<<" : ">>"}</button>
        </div>
        )
    }


}