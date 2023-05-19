
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState();

  // GET request to get a user
  useEffect(() => {
    // wait for the useRouter hook to asynchronously get the query id
    if (!id) {
      return;
    }
    console.log('id: ', id)

    const fetchUser = async () => {
      const response = await fetch(`/api/script/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log('GET', response)

      const user = await response.json();
      setName(user?.data.name);
      console.log('GET USER', user.data.name)
      console.log('STATE VAR', name)
    }

    fetchUser();
  }, [id]);

  // POST request to mimic the saving of a user
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: name, // Use the name state to capture the user input
    };
    const response = await fetch("/api/script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user}),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    console.log('POST USER: ', user)
    console.log('response: ', response)
    const data = await response.json();
    console.log('POST: ', data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name ?? ''} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}