import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const header = {"Access-Control-Allow-Origin": "*"};

  const handleChange = (e) => {
    e.preventDefault();
    axios.post('https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation',{
      name: name,
      email: email,
      header,
    })
    .then(() => {
      navigate("/xread");
    });
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={ handleChange }>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
