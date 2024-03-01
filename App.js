
import styles from './App.module.css';
import {User} from './User'
// darchenili 24wutamdemere exercise solution wamova
function App() {
  const names = ['nika','gio','sergi', 'sandro' ,]
  const users = [
    {name: 'nika', age:24 },
    {name: 'gio', age:18 },
    {name: 'sergi', age:18 },
    {name: 'sandro', age:12 }
  ]
  
  return (
    <div className='App'>
      {users.map((user, key)=>{
        return <User name = {user.name}  age = {user.age} />
      })}




      {names.map((name,key) =>{
    return <h1 key={key} > {name}</h1>
  })} 


    </div>
  )
  
}



export default App;
