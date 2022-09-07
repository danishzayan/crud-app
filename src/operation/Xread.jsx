import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Xread = () => {
  const [data, setData] = useState([]);
  const [dark, setDark] = useState("");

  const getData = () => {
    axios
      .get('https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  const deleteHandle = (id) => {
    axios
      .delete(
        `https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  useEffect(() => {
    getData();
  }, []);

  const changeDarkHandle = () => {
    if(dark === "table-dark") {
      setDark("");
    }
    else{
      setDark("table-dark");
    }
  }

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h2>Read Data</h2>
          <div className="d-flex justify-content-between align-items-center">
          <div class="form-check form-switch mx-4">
              <input
                class="form-check-input"
                type="checkbox"
                onClick={changeDarkHandle}
              />
            </div>
            <Link to="/">
              <button className="btn btn-primary">Create Data</button>
            </Link>
          </div>
        </div>
        <table className={`table ${dark} mt-4`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachdata) => {
              return (
                <tr>
                  <th scope="row">{eachdata.id}</th>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachdata.id,
                            eachdata.name,
                            eachdata.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandle(eachdata.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Xread;
