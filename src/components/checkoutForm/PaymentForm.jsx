import React from 'react'
import {Divider,Typography,Button} from '@material-ui/core'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Review from './Review';

const stripePromise = loadStripe('...');

const PaymentForm = ({checkoutToken,backStep}) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{margin:'20px 0'}}>Payment method</Typography>
      <Elements stripe={stripePromise}>
         <ElementsConsumer>
            {({elements,stripe})=>(
                <form>
                    <CardElement />
                    <br /> <br />
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button variant="outlined" onClick={backStep}>Back</Button>
                        <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                            Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                        </Button>
                    </div>
                </form>
            )}
         </ElementsConsumer>
      </Elements>
    </>  
    )
}

export default PaymentForm

// REACT_APP_CHEC_PUBLIC_KEY = pk_41545036e553b3dc575f8f9cfdd814c262bfb14d9eb6b
