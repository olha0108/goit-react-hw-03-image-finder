import React, { Component } from 'react';
import { SearchbarHeader } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormbutton } from './Searchbar.styled';
import { SearchFormbuttonlabel } from './Searchbar.styled';
import { SearchForminput } from './Searchbar.styled';


export class Searchbar extends Component {
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.props.onSubmit}>
          <SearchFormbutton type="submit" >
            <SearchFormbuttonlabel>Search</SearchFormbuttonlabel>
          </SearchFormbutton>

          <SearchForminput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
