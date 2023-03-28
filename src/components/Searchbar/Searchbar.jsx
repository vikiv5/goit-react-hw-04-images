import React, {useState} from "react";
import { MdSearch } from 'react-icons/md';

import {
    SearchbarStyles,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
  } from './Searchbar.styled';


const Searchbar = ({handleSearch})=> {
    
        const[value, setValue] = useState ("")
    

   const  handleInputChange = (e)=> {
    setValue (e.currentTarget.value.toLowerCase().trim())
        
      };

    const  handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(value);
        reset();
      }
      const reset = () => {
        setValue("");
      }

    return (
        <SearchbarStyles>
          <SearchForm onSubmit={handleSubmit}>
            <SearchFormButton type="submit" aria-label="Search Button">
            <MdSearch size={25} />
            </SearchFormButton>
  
            <SearchFormInput
              onChange={handleInputChange}
              value={value}
              type="text"
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchbarStyles>
      );
    }
  
  export default Searchbar ; 