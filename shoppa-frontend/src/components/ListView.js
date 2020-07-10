import React from "react";
import ListObject from "./ListObject";
import { ListList } from "semantic-ui-react";
import {
    getToken,
    fetchGetWithToken,
    fetchPostWithToken,
    deleteList,
} from "./Fetches.js";

const API_URL = "http://localhost:3001/";

export default class ListView extends React.Component {
    state = {
        allLists: this.props.allLists,
    };

    getMyLists = () => {
        fetchGetWithToken("lists")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.all_lists) {
                    this.setState({
                        allLists: data.all_lists,
                    });
                }
            })
            .catch(console.error);
    };

    // componentDidMount = () => {
    //     this.getMyLists();
    // };

    renderLists = () => {
        const { allLists } = this.props;
        return allLists.map((list) => (
            <ListObject
                key={list.id}
                name={list.name}
                icon={list.icon}
                id={list.id}
                handleImportList={this.props.handleImportList}
                handleAnimationChange={this.props.handleAnimationChange}
                getMyLists={this.getMyLists}
            />
        ));
    };

    render() {
        return <>{this.renderLists()}</>;
    }
}
