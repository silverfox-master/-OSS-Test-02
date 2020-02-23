import React from 'react';
import Product from './product.component'
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
      display:'flex',
      flexWrap:'wrap',
      padding: '20px 20px',
      justifyContent: 'center'
  }
});

const ProductList = props => {
    const classes = useStyles();
    const productComponents = props.products.map((product) => (
      <Product 
        key={'product-' + product.id}
        onDelete={props.handleDelete}
        {...product}
      />
    ));
  
    return( 
      (props.products.length !==0) ?
      <Paper className={classes.root} elevation={3}>
          {productComponents}
      </Paper>:
      null
    )
  }
  
  export default ProductList;
  