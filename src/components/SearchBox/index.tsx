import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

type SearchBoxProps = {
  value: string;
  onChange: (newValue:string) => void;
};

const SearchBox = (props:SearchBoxProps) => {
  const {value, onChange} = props;

  return (
    <div>
      <FormControl>
        <Input
          placeholder="Type a name to search!"
          id="itandard-full-width"
          value={value}
          onChange={
            (event) => {
              onChange(event.target.value)
            }
          }
        />
      </FormControl>
    </div>
  )
}
export default SearchBox;
