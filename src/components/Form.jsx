import React from 'react';

function Form({ artist, inputHandler, buttonHandler }) {
  return (
    <form
      className="search-form"
      onSubmit={ buttonHandler }
    >
      <input
        placeholder='Search for artist...'
        type="text"
        className="search-input"
        value={ artist }
        onChange={ inputHandler }
      />
      <button
        type='submit'
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default Form;