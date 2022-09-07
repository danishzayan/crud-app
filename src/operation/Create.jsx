import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const header = { 'Access-Control-Allow-Origin': '*' };

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .post('https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation', {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        navigate('/xread');
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h2>Create Date</h2>
          <Link to="/xread">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleChange}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
