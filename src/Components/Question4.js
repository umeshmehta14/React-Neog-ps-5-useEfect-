import React, { useState, useEffect } from 'react'
// Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.


// fakeFetch has been provided:

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'Saroj',
            image:
              'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
            likes: 500,
            comments: 10,
          },
        })
      } else {
        reject({
          status: 404,
          message: 'user data not found.',
        })
      }
    }, 2000)
  })
}
const Question4 = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/user");
            if(response.status === 200){
                setUserDetails(response.data);
                setLoading(false);
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
      <p>{loading && "...Loading"}</p>
      <h1>USER PROFILE</h1>
      <img src={userDetails.image} alt="Not available" height="300px" width="300px" />
      <p>name:{userDetails.name}</p>
      <p>likes:{userDetails.likes}</p>
      <p>comments:{userDetails.comments}</p>
    </div>
  )
}
export default Question4
