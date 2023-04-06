import React, {useState, useEffect} from 'react'

// Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.

// a. Show “Loading…” until your data displays on the DOM.

// b. Handle errors by showing an error message on the DOM, in case of any error.

// Output-5

// fakeFetch has been provided:

// You can use your own images if you wish

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Saroj',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 500,
              comments: 10,
            },
            {
              name: 'Meeta',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 200,
              comments: 1,
            },
            {
              name: 'Alia',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 100,
              comments: 5,
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users data not found.',
        })
      }
    }, 2000)
  })
}
const Question5 = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);

    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/users");
            if(response.status === 200){
                setUserDetails(response.data);
                setLoading(false);
            }

        } catch (err) {
            setError(true);
        }
    }
    useEffect(()=> {
        getData();
    },[])
  return (
    <div>
      <p>{loading && "...Loading"}</p>
      <p>{Error && "Sorry currently server doesn't respond"}</p>
      <h1>USER FEED</h1>

      <div>
        {
            userDetails.map(({name, image, likes, comments})=>{
                return <div>
                    <h3>{name}</h3>
                    <img src={image} alt="not available" height="300px" width="300px"/>
                    <p>Likes:{likes}</p>
                    <p>comments:{comments}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Question5
