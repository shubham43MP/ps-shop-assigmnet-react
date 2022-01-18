import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TBC } from 'pages/products/misc'

type SelectComponentMobile = {
  buttonContainer: TBC[];
  handleChange: (event: SelectChangeEvent) => void;
  value: string | undefined;
}

export default function SelectComponentMobile({
  buttonContainer = [],
  handleChange,
  value
}: SelectComponentMobile) {

  return (
    <Box sx={ { minWidth: 120 } }>
      <FormControl fullWidth>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={ value }
          label="Category"
          onChange={ handleChange } 
        >
          {
            buttonContainer.map(bc => (
              <MenuItem key={ bc.id } value={ bc.id }>{bc.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}