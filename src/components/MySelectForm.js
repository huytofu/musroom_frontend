import React from 'react';
import {FormControl, NativeSelect, FormHelperText} from '@material-ui/core'

class MySelectForm extends React.Component {
    render(){
        let {handleChange, data, options, property, self} = this.props;
        let display_options = options.map(option=>{
            return (<option value={option.value}>{option.text}</option>)
        });
        return(
            <FormControl style={{margin: 5, padding: 5, width: '100%', borderColor: 'black'}}>
                <NativeSelect
                  value={data}
                  onChange={handleChange.bind(self, property)}
                  name={property}
                  inputProps={{ 'aria-label': property }}>
                  {display_options}
                </NativeSelect>
                <FormHelperText>Select value for {property}</FormHelperText>
            </FormControl>
        )
    }
}

export default MySelectForm;