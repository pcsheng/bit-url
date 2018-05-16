import React from 'react';

const InputForm = ({ link, handleChange, handleSubmit, context }) => {
  return (
    <form className="center-align" onSubmit={handleSubmit} >
      <div className="input-field">
        <input required id="url" type="url" className="validate" value={link} onChange={handleChange} />
        <label htmlFor="url">{context + " URL"}</label>
      </div>
      <button type="submit" className="waves-effect waves-light btn">{context === "External" ? "generate link" : "get stats"}</button>
    </form>
  )
}

export default InputForm;