import React from "react";
import ListCategory from "./ListCategory"
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'



export default class CategoriesContainer extends React.Component {


    renderAllItemContainers = () => {
        const currentItems  = this.props.items;
        const itemArrayCollection = {};
        const arrayOfItemCollectionComponents = [];
    
        currentItems.forEach((product, index) => {
          product.fullListIndex = index;
          if (product.checked){
            if (itemArrayCollection["checked"]) {
              itemArrayCollection["checked"].push(product);
            } else {
              itemArrayCollection["checked"] = [product];
            }
          }
          else if (itemArrayCollection[product.category]) {
            itemArrayCollection[product.category].push(product);
          } else {
            itemArrayCollection[product.category] = [product];
          }
        });
    
        for (const category in itemArrayCollection) {
          const productArray = itemArrayCollection[category];
          const newIC = (
            <ListCategory 
              category={category} 
              items={productArray}
              deleteItem={this.props.deleteItem}
              itemMethods={this.props.itemMethods}
            />
          );
          arrayOfItemCollectionComponents.push(newIC);
        }
    
        return arrayOfItemCollectionComponents;
      };

    render= ()=>{
        return (
            <Grid>
            {this.renderAllItemContainers()}
            </Grid>
        )
    }
    



}