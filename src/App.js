import React from 'react';
import ProductList from './components/product-list.component'
import Header from './components/header.component'
import { Route , Switch } from 'react-router-dom'
import Stats from '././components/stats.component'
import uuid from 'uuid/v1'
import AddItems from '././components/add-item.form'
import apiClient from './helpers/local-storage.helper'
import Grid from '@material-ui/core/Grid';
import DATA from './assets/Product.data.json'



import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
container:{
  display: 'flex',
  flexDirection: 'row',
  padding: '25px 50px 100px',
  
}
}));

const App = () =>{
  const classes = useStyles();
  apiClient.saveItems('items', DATA.items);
  const [items, setItems] = React.useState(apiClient.loadItems('items'));
  

  const handleClear= () =>{
    setItems([])
    apiClient.saveItems('items',[]);
  };

  const handleProductDelete = productId => {
    const nextProducts = items.filter((product) => (
      product.id !== productId
    ));
    setItems(nextProducts);
    apiClient.saveItems('items',nextProducts);
  };

  

  const handleAddItem = (p_title,p_description,p_price) => {
    const newproducts = items.concat({
        id:uuid(),
        imageUrl:'',
        title:p_title,
        description:p_description,
        price:parseFloat(p_price),
    });
    setItems(newproducts);
    apiClient.saveItems('items',newproducts);
  }
  

  return (
    <div className={classes.container} >
      <Grid container spacing={3}>
        <Header/>
        <Grid item xs={9}> 
          <Switch>
              <Route exact path='/' 
                      component={() => <ProductList 
                                            products={items}
                                            handleDelete={handleProductDelete}
                                           
                                      />} />
              <Route path='/item-add' 
                      component={() => <AddItems
                                            onSubmit={handleAddItem} 
                                      />} />
          </Switch>
        </Grid>
        <Grid item xs={3}> 
          <Stats onDeleteAll={handleClear}
                 items={items}
          />
        </Grid>
      </Grid>
    </div>
  );
}



export default App;
