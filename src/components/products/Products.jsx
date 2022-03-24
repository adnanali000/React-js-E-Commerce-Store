import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'
import useStyles from './styles'

const products = [
  { id: 1, name: 'charger', description: 'fast charger.', image:'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFnRkRPQ2orclMuX0FDX1NMMTUwMF8uanBn.jpg', price: '$10' },
  { id: 2, name: 'handfree', description: 'Good music quality.',image:'https://www.buykarlo.pk/wp-content/uploads/2020/07/iphone_x_lightning_handsfree_original.jpg', price: '$7' },
]

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} s={6} md={4} lg={3} >
            <Product product={product} />
          </Grid>
        ))}

      </Grid>
    </main>
  )
}

export default Products