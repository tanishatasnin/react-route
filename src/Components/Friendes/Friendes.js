import React from 'react';
import  { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friendes.css';

const Friendes = () => {
               const [friends, setFriends] = useState([]);
               useEffect(()=>{
                              fetch('https://jsonplaceholder.typicode.com/users')
                              .then(res=>res.json())
                              .then(data=>setFriends(data))
               },[])
               return (
                              <div>
                                       
                                       <div className='card-container'>
                                       {
                                                      friends.map(friend=><Friend 
                                                      key={friend.id}
                                                      friend={friend}
                                                      ></Friend>)
                                       }    
                                       </div>
                              </div>
               );
};

export default Friendes;