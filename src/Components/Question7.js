import React, {useEffect, useState} from 'react'
// Create a React component called Comments.

// a. Fetch the comments using thefake fetch and list the data on DOM.
// b. Each comment component will have the text, user’s name and a delete button.
// c. On click of the delete button, that particular comment object should be deleted and should not be visible on the DOM.


// FakeFetch has been provided:

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/comments') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              {
                name: 'Raju',
                text: 'Hello how are you long time no see!!!',
              },
              { name: 'Pankaj', text: 'Party when??' },
              { name: 'Sakshi', text: 'Where are you currently staying' },
              { name: 'Kishore', text: 'Hello Buddy!!' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No comments Found',
        })
      }
    }, 2000)
  })
}

const Question7 = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/comments");
            if(response.status === 200){
                setUserDetails(response.data.products);
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=> {
        getData();
    },[])

    const HandleDelete = (Clickedindex) =>{
        const deletedData = userDetails.filter((data, index)=> index !== Clickedindex);
        setUserDetails(deletedData);
    }
  return (
    <div>
      <p>{loading && "...Loading"}</p>
      <div>
        {
            userDetails.map(({name, text}, index)=>{
                return <div>
                    <h3>{name}{" "}</h3>
                    <p>{text}</p>
                    <button onClick={()=>HandleDelete(index)}>Delete</button>
                </div>
            })
        }
      </div>
      
    </div>
  )
}

export default Question7
