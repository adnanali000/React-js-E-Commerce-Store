import React from 'react'
import { Grid , TextField} from '@material-ui/core'
import {useFormContext,Controller} from 'react-hook-form'

const FormTextField = ({name,label,required}) => {
    const {control} = useFormContext()
  return (
    <Grid xs={12} sm={6}>
        {/* <Controller 
            as={TextField}
            control={control}
            fullWidth
            name={name}
            label={label}
            required={required}
        /> */}
          <Controller 
            control={control}
            name={name}
            render={({field})=>(
              <TextField 
              style={{width:'90%'}}
              label={label}
              required={required}              
              />
            )}
        />
    </Grid>
  )
}

export default FormTextField