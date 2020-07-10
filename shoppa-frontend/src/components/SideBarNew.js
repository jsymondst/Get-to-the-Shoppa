import PropTypes from "prop-types";
import React, { Component } from "react";
import Main from "./Main";
import ListView from "./ListView";
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from "semantic-ui-react";
import YourListsSideBar from "./YourListSideBar";
import {
    fetchGetWithToken,
    fetchPostWithToken,
    deleteList,
    fetchPatchWithToken,
} from "./Fetches.js";

const noList = {
    name: "New List",
    id: null,
    products: [],
};

export default class TheRealMain extends Component {
    state = {
        animation: "overlay",
        direction: "left",
        dimmed: false,
        visible: false,
        currentList: noList,
        allLists: [],
    };
    ////////////////////////////////////////////////////////////////////////////////
    //Sidebar stuff
    ////////////////////////////////////////////////////////////////////////////////

    handleAnimationChange = (animation) => () => {
        // this.setState((prevState) => ({ animation, visible: !prevState.visible }))
        this.setState({
            visible: !this.state.visible,
            animation,
        });
    };

    handleDirectionChange = (direction) => () =>
        this.setState({ direction, visible: false });

    popOutSideBar = () => {
        // this.handleAnimationChange("scale down");
        this.setState({
            visible: !this.state.visible,
            animation: "scale down",
        });
        this.getMyLists();
    };

    ////////////////////////////////////////////////////////////////////////////////
    //List Management stuff
    ////////////////////////////////////////////////////////////////////////////////

    getMyLists = () => {
        fetchGetWithToken("lists")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.all_lists) {
                    this.setState({
                        allLists: data.all_lists,
                    });
                }
            })
            .catch(console.error);
    };

    handleImportList = (listID) => {
        fetchGetWithToken(`lists/${listID}`)
            .then((res) => res.json())
            .then((list) => {
                this.setState({
                    currentList: list,
                    visible: false,
                });
            });
    };

    componentDidMount = () => {
        this.getAllProducts();
    };

    getAllProducts = () => {
        fetchGetWithToken("products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.products) {
                    // let productArray = data.products.map(product => {return {title: product.product, description: product.category}})
                    // console.log(productArray)
                    this.setState({
                        productList: data.products,
                    });
                }
            })
            .catch(console.error);
    };

    addItem = (itemName) => {
        const { items, productList } = this.state;
        const { currentList } = this.state;

        let newItem = productList.find(
            (product) => product.product == itemName
        );

        if (newItem != undefined) {
            this.setState({
                currentList: {
                    ...currentList,
                    products: [...currentList.products, newItem],
                },
            });
        } else {
            newItem = {
                product: itemName,
                category: "Unsorted",
            };
            this.setState({
                currentList: {
                    ...currentList,
                    products: [...currentList.products, newItem],
                },
            });
        }
    };

    deleteItem = (itemIndex) => {
        const { currentList } = this.state;
        let currentProducts = currentList.products;

        let updatedProducts = [
            ...currentProducts.slice(0, itemIndex),
            ...currentProducts.slice(itemIndex + 1, currentProducts.length),
        ];

        console.log(currentProducts);
        console.log(updatedProducts);
        this.setState({
            currentList: { ...currentList, products: updatedProducts },
        });
    };

    editItem = (itemIndex, newName) => {
        const { currentList } = this.state;
        let currentProducts = currentList.products;
        let item = currentProducts[itemIndex];
        item = {
            category: item.category,
            product: newName,
        };

        currentProducts[itemIndex] = item;

        this.setState({
            currentList: { ...currentList, products: currentProducts },
        });
    };

    checkItem = (itemIndex) => {
        const { currentList } = this.state;
        let currentProducts = currentList.products;
        let item = currentProducts[itemIndex];
        item = {
            ...item,
            checked: !item.checked,
        };

        currentProducts[itemIndex] = item;

        this.setState({
            currentList: { ...currentList, products: currentProducts },
        });
    };

    updateName = (newName) => {
        const { currentList } = this.state;

        this.setState({
            currentList: { ...currentList, name: newName },
        });
    };

    ////////////////////////////////////////////////////////////////////////////////
    //Persistence Stuff
    ////////////////////////////////////////////////////////////////////////////////

    saveList = () => {
        const { currentList } = this.state;
        const { id } = currentList;

        const listObject = {
            name: currentList.name,
            products: currentList.products,
            icon: "cart",
        };

        if (id) {
            listObject.id = id;
            // const listObjectJson = JSON.stringify({ list: listObject });
            fetchPatchWithToken(`lists/${id}`, { list: listObject });
        } else {
            // const listObjectJson = JSON.stringify({ list: listObject });
            console.log(listObject);
            fetchPostWithToken("lists", { list: listObject });
        }
    };

    ////////////////////////////////////////////////////////////////////////////////
    //Render Stuff
    ////////////////////////////////////////////////////////////////////////////////

    render() {
        const {
            animation,
            dimmed,
            direction,
            visible,
            allLists,
            currentList,
        } = this.state;
        const itemMethods = {
            deleteItem: this.deleteItem,
            editItem: this.editItem,
            checkItem: this.checkItem,
        };

        const listControlMethods = {
            saveList: this.saveList,
            listID: currentList.id,
        };

        return (
            <div>
                {/* <Button
            active={direction === 'left'}
            onClick={this.handleDirectionChange('left')}
          >
            Left
          </Button> */}
                <br></br>
                {/* <Button onClick={this.handleAnimationChange("scale down")}> */}
                <Button
                    onClick={this.popOutSideBar}
                    color="teal"
                    size="large"
                    style={{ marginLeft: "15px", width: "200px" }}
                >
                    Your Shopping Lists
                </Button>

                <Sidebar.Pushable as={Segment}>
                    <YourListsSideBar
                        animation={animation}
                        direction={direction}
                        visible={visible}
                        handleImportList={this.handleImportList}
                        allLists={allLists}
                        handleAnimationChange={this.handleAnimationChange}
                    />
                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic>
                            <Main
                                list={currentList}
                                addItem={this.addItem}
                                itemMethods={itemMethods}
                                listControlMethods={listControlMethods}
                                updateName={this.updateName}
                            />
                            {/* <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

// const VerticalSidebar = ({ animation, direction, visible, handleImportList }) => (
//   <Sidebar
//     as={Menu}
//     animation={animation}
//     direction={direction}
//     icon='labeled'
//     // inverted
//     vertical
//     visible={visible}
//     width='very wide'
//   >
//     <Menu.Item as='a'>
//       <ListView handleImportList={handleImportList}/>
//     </Menu.Item>
//   </Sidebar>
// )

// VerticalSidebar.propTypes = {
//     animation: PropTypes.string,
//     direction: PropTypes.string,
//     visible: PropTypes.bool,
// }
