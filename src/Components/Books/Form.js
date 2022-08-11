import React from 'react';

const Form = () => (
  <form>
    <input type="text" name="title" id="title" placeholder="BOOK TITLE" required />
    <input type="text" name="author" id="author" placeholder="AUTHOR" required />
    <button type="submit" className="submit">ADD BOOK</button>
  </form>
);

export default Form;
