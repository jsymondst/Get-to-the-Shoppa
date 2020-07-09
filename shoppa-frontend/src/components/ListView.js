import React from 'react'
import ListObject from './ListObject'
import { ListList } from 'semantic-ui-react';
import { getToken, fetchGetWithToken, fetchPostWithToken, deleteList} from './Fetches.js';


const API_URL = "http://localhost:3001/";

export default class ListView extends React.Component { 

    state ={
      allLists: [],
    }


  getMyLists = () => {
      fetchGetWithToken("lists")
          .then((res) => res.json())
          .then(data=>{
            console.log(data)
            if (data.all_lists){
              this.setState({
                allLists:data.all_lists,
              })
            }
          })
          .catch(console.error);
  }

  componentDidMount = () =>{
    this.getMyLists()
  }

  renderLists = () => { 
    const {allLists} = this.state
    return allLists.map(list => <ListObject key={list.id} name={list.name} icon={list.icon} id={list.id}/>)
  }
      
    render() { 
        return (
          <>
          {this.renderLists()}
          </>
        )
    }
}