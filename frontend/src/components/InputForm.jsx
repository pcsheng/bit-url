import React from 'react';

const InputForm = ({ link, handleChange, handleSubmit }) => {
  return (
    <form className="center-align" onSubmit={handleSubmit} >
      <div className="input-field">
        <input required id="url" type="url" className="validate" value={link} onChange={handleChange} />
        <label for="url">URL</label>
      </div>
      <button type="submit" className="waves-effect waves-light btn">generate link</button>
    </form>
  )
}

export default InputForm;