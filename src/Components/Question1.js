import React, { useEffect,useState } from 'react'

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.


// fakeFetch has been provided:

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}
const Question1 = () => {
    const [users, setUsers] = useState([]);
    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/users/status");
            if(response.status === 200){

                setUsers(response.data.products);
            }

        } catch (err) {
            console.log(err)
            
        }
    }
    useEffect(()=> {
        getData();
    },[])
  return (
    <div>
      {
        users.map(({name, status})=>{
            return <p style={{color:status === "Online" ?"green":"red"}}>
            {name}
            </p>
        })
      }
    </div>
  )
}

export default Question1
