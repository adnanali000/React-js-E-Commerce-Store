import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import Product from './product/Product'
import useStyles from './styles'
import './style.css'
import {Link} from 'react-router-dom'



const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
    <div className="productTop">
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" /> shop it hurry!!
      </h1>
      <p className="mb-8 leading-relaxed">This Headphone Provides High Sound Quality And Strong Deep Bass And Crystal Clear Pitch. Features A Built-In Remote Control To Adjust Volume, Play / Pause Music, Control Playback Of Music And Video, Track Your Favorite Song. This Can Be Operated With The Built-In Buttons On The Cord.</p>
      <div className="flex justify-center">
        <a href="#Handsfree">
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{backgroundColor:'#02494d'}}>Shop Now</button>
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://zeebrands.pk/dashboard/assets/uploads/f1b33eed080d7b470d0a5817a07f4a17.jpg" />
    </div>
  </div>
</section>
<main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography style={{display:'flex', color:'#02494d',justifyContent:'center',alignItems:'center',marginTop:'-20px' }} variant="h4">Our Products</Typography>
        {categories.map((category, index) => {
          return (
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
              <Container id={category.name}>
                <Typography style={{ paddingBottom: '20px', paddingTop: '20px', color:'#02494d' }} variant="h4" >{category.name}</Typography>
                <Grid container justifyContent='center' spacing={4}>
                  {category.productsData.map((product) => (
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
      </div>
    </>
  )
}

export default Products