import React,{useState, useEffect} from 'react'
// Create a React component that fetches chat data from an API endpoint using useEffect hook and display chat data (name and chat message) as a list on the screen using the useState hook.

// a. Show “Loading Chats…” until your data displays on the DOM.

// fakeFetch has been provided:

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/userchat') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Alia',
              messages: [
                {
                  from: 'Alia',
                  message: 'Good Morning',
                },
                {
                  from: 'Ranvir',
                  message: 'Good Morning, How are you?',
                },
              ],
            },
            {
              name: 'Jeena',
              messages: [
                {
                  from: 'Jeena',
                  message: 'When is the meeting scheduled?',
                },
                {
                  from: 'Seema',
                  message: 'It is at 10AM tomorrow.',
                },
              ],
            },
            {
              name: 'Abhay',
              messages: [
                {
                  from: 'Abhay',
                  message: 'Have you found a house yet?',
                },
                {
                  from: 'John',
                  message: 'No luck yet, still searching.',
                },
                {
                  from: 'Abhay',
                  message:
                    'Hey, an apartment just got vacant in my bulding. Do you wanna have a look?',
                },
              ],
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users chat not found.',
        })
      }
    }, 2000)
  })
}
const Question6 = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/userchat");
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
      <p>{loading && "...Loading Chats"}</p>
      <ul>
        {
            userDetails.map(({name,messages})=>{
                return <li>
                    <h2>{name}'s Chat</h2>
                    <ul style={{listStyleType:"circle"}}>
                        {messages.map(({from,message})=>{
                            return<li><strong>{from}</strong>:{message}</li>
                        
                        })}
                    </ul>
                </li>
            })
        }
      </ul>
      
    </div>
  )
}

export default Question6
