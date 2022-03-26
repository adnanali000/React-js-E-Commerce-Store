import React,{useState,useEffect} from 'react'
import {Select,InputLabel,Button,Grid,MenuItem,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import FormTextField from './FormTextField'
import {commerce} from '../../lib/commerce'


const AddressForm = ({checkoutToken}) => {
    const [shippingCountries,setShippingCounrties] = useState([]);
    const [shippingCountry,setShippingCounrty] = useState('');
    const [shippingSubdivisions,setShippingSubdivisions] = useState([]);
    const [shippingSubdivision,setShippingSubdivision] = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState('');

    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
    // console.log(countries);
    const fetchShippingCountries = async(checkoutTokenId)=>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
        // console.log(countries)
        setShippingCounrties(countries)
        setShippingCounrty(Object.keys(countries)[0])
    }

    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id)

    },[])


  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3} align='left' style={{marginLeft:3}}>
                    <FormTextField name='firstName' label='First Name' required />
                    <FormTextField name='lastName' label='Last Name' required />
                    <FormTextField name='email' label='Email' required />
                    <FormTextField name='address' label='Address' required />
                    <FormTextField name='city' label='City' required />
                    <FormTextField name='zip' label='ZIP / Postal code' required />
                     <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={shippingCountry} fullWidth onchage={(e)=>setShippingCounrty(e.target.value)}>
                            {countries.map((country)=>(
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/*
                    <Grid item xs={12} sm={6}>
                        <InputLable>Shipping Subdivision</InputLable>
                        <Select value={} fullWidth onchage={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLable>Shipping Options</InputLable>
                        <Select value={} fullWidth onchage={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm