import React, {useState} from 'react';
import SearchBox from '../SearchBox';
import ResultBox from '../ResultBox';
import EmptyResult from '../EmptyResult';
import ErrorBoundary from '../ErrorBoundary';
import {Box} from "@material-ui/core";


const Main = () => {
  const [query, setQuery] = useState('');

  return (
    <main style={{ textAlign: 'center'}}>
        <Box my={2}>
          <SearchBox onChange={(value) => {
            setQuery(value)
          }} value={query}/>
        </Box>
        <ErrorBoundary>
          {query && query !== '' ? <ResultBox query={query}/> : <EmptyResult/>}
        </ErrorBoundary>
    </main>
  );
}

export default Main;