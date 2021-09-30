import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
               const{name,id,phone,website}=props.friend;
               return (
                              <div className="card">
                                             <h1>name:{name}</h1>
                                             <p>call us : {phone}</p>
                                             <h5>Website :{website}</h5>
                                             
                                             <Link to={`./friend/${id}`}>
                                                            <button> About me</button>
                                             </Link>

                              </div>
               );
};

export default Friend;