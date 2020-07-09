import React from 'react'
import InputNew from './InputNew'
import ControlsBar from './ControlsBar'
import ListView from './ListView'
import ListCategory from './ListCategory'
import CategoriesContainer from "./CategoriesContainer"
import EditableTextItem from "./EditableTextItem"
import { Grid } from 'semantic-ui-react'
import { getToken, fetchGetWithToken, fetchPostWithToken, deleteList} from './Fetches.js';


// import Speech from './components/Speech'

export default class Main extends React.Component {

    constructor(){
        super()
        // const {name, products, id} = this.props.list
        this.state = {
            items: [{product: "carrots", category: "Produce"}, {product: "tomatoes", category: "Produce"}, {product: "rice", category: "World foods"}],
        productList: []
        }
    }



    componentDidMount = () =>{
        this.getAllProducts()
    }

    getAllProducts = () => {
        fetchGetWithToken("products")
            .then((res) => res.json())
            .then(data=>{
              console.log(data)
              if (data.products){
                // let productArray = data.products.map(product => {return {title: product.product, description: product.category}})
                // console.log(productArray)
                this.setState({
                  productList:data.products,
                })
              }
            })
            .catch(console.error);
        }

    

    // additem = (itemName) =>{
    //     const {items, productList} = this.state

    //     let newItem = productList.find(product => product.product == itemName)

    //     if (newItem != undefined){
    //         this.setState({
    //             items: [...items, newItem]
    //         })
    //     } else {
    //         newItem = {
    //             product: itemName,
    //             category: "Unsorted"
    //         }
    //         this.setState({
    //             items: [...items, newItem]
    //         })
    //     }    
    // }


    clearList = () => {
        console.log("cleared");
    };
    handleEdit = (id) => {};
    handleDelete = (id) => {};

    render() {
        const { name, products } = this.props.list
        return (
            <>
            {/* <p>logged in as {this.props.user}</p> */}
        <h1>{name}</h1>
            <Grid celled>
                <Grid.Row className="segment centered">
                    <Grid.Column width={12}>
                                <InputNew
                                    item={this.state.item}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    editItem={this.state.editItem}
                                    addItem={this.props.addItem}
                                />
                                <CategoriesContainer  
                                    items={products}
                                    deleteItem={this.props.deleteItem}
                                    itemMethods={this.props.itemMethods}
                                    />
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <ControlsBar />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <EditableTextItem />
            </>
        );
    }
}
