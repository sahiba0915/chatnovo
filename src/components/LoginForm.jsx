import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handelSubmit = async(e) => {
    e.preventDefault();
    if (!(username.length > 0 && password === confirmPassword && password.length > 0)) return;
  
    const authObject = {
      'Private-Key': '2f389292-d5e1-4799-bd31-b456e7e94845',
      // 'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
      // 'User-Name': username,
      // 'User-Secret': password
    }
  
    const authHeader = {
      'Private-Key': '2f389292-d5e1-4799-bd31-b456e7e94845',
      'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
    }
    // const authBody = {
    //    'username': username,
    //    'secret': password
    // }
  
  
  
    try {
      //fetch the current user if it exists
      const userExists = await axios.get('https://api.chatengine.io/users', {
        headers: authObject
      });
      console.log('worked');
      console.log(userExists);
      // if user already exists and in localStorage redirect them to the chat room
      if (userExists && (localStorage.getItem('username') && localStorage.getItem('username') === username)) {
        setTimeout(() => {
          history.push('/chat')
        }, 1000)
        return;
      }
      console.log('worked2');
      // if user don't exists, create a new user 
      await axios.post('https://api.chatengine.io/users', {
        headers: authHeader,
        body: {
          'username': username,
          'secret': password
        }
      });
      console.log('worked25');
      history.push('/login')
    } catch (error) {
      console.log(error);
      setError(`oops, something went wrong`)
    }
  
  }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;