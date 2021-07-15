import React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title){
  return title;
}

function App() {
  return (
    <div>
      <h1>
        Hello {getTitle('React from facebook')}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;
