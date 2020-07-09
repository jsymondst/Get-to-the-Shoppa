import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Button, Menu } from 'semantic-ui-react'
import { getToken, fetchGetWithToken, fetchPostWithToken, deleteList} from './Fetches.js';


const initialState = { isLoading: false, results: [], value: '', }

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))



export default class InputNew extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), '')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.products, isMatch),
      })
    }, 300)
  }

  handleSubmit =() =>{
    this.props.addItem(this.state.value)
    this.setState({
      value: "",
    })
  }

  getAllProducts = () => {
    fetchGetWithToken("products")
        .then((res) => res.json())
        .then(data=>{
          if (data.products){
            let productArray = data.products.map(product => {return {title: product.product, description: product.category}})
            this.setState({
              products:productArray,
            })
          }
        })
        .catch(console.error);
    }

  componentDidMount =() =>{
    this.getAllProducts()
  }


  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Search
            placeholder="Type in a list item"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          /> 
        </Grid.Column>
        <Grid.Column width={3}>
          <Button type='submit' onClick={this.handleSubmit}>Add Item</Button>
        </Grid.Column>
      </Grid>
    )
  }
}


