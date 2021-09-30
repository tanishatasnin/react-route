import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
               const {friendId} = useParams();
               const [friend,setFriend] = useState([]);
useEffect(()=>{
               const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
               fetch(url)
               .then(res=>res.json())
               .then(data=>setFriend(data))
},[])
               return (
                              <div>
                                        <h1>fried ditailes{friendId}</h1> 
                                        <h1>name:{friend.name}</h1> 
                                        <p>phone : {friend.phone}</p>   
                              </div>
               );
};

export default FriendDetails;