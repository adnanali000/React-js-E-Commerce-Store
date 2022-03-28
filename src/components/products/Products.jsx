import React from 'react'
import { Grid,Container,Typography } from '@material-ui/core'
import Product from './product/Product'
import useStyles from './styles'

const Products = ({categories,onAddToCart}) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {categories.map((category,index)=>{
        return(
          <div
          className={classes.content}
            style={{
              // height:'100%',
              // width:'100%',
              // backgroundColor:'blue',
              // position:'absolute',
              // zIndex:'-1'
              // backgroundImage:
              //   index % 2 !== 0 ? "linear-gradient(to bottom right, #3d4a5d,#3d4a5d,#bb86fc)":" ",
            }}
          >
          <Container>
            <Typography style={{paddingBottom:'20px',paddingTop:'20px'}} variant="h4">{category.name}</Typography>
          <Grid container justifyContent='center' spacing={4}>
            {category.productsData.map((product)=>(
               <Grid item key={product.id} xs={12} s={6} md={4} lg={3} >
               <Product product={product} onAddToCart={onAddToCart} />
             </Grid>
            ))}
          </Grid>
          </Container>
          </div>
        )
      })}
      {/* <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} s={6} md={4} lg={3} >
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}

      </Grid> */}
    </main>
  )
}

export default Products