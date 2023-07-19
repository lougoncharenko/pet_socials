import { useEffect, useState } from 'react';

const Home = () => {
 const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
    const result = await fetch("/api")
    const data = await result.json()
    setBackendData(data)
   }
   fetchData()
    }, [])

    const submitPost = async () => {
      const myData = {
        title: "postFour"
      }

      const result = await fetch("http://localhost:4000/api", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(myData)
      })

      const resultJson = await result.json()
      setBackendData(prev => [...prev, resultJson])
    }

  return (
    <>
    <button onClick={submitPost}>Submit a post</button>
     {(typeof backendData.posts === 'undefined') ? (
      <p>Loading...</p>
     ): (
      backendData.posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))
     )}
    </>
  );
    
}

export default Home;