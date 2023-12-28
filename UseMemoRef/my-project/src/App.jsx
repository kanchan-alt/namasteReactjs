
import './App.css'
import Demo from './components/Demo'
import Demo1 from './components/Demo1'

function App() {
 

  return (
    <div className='flex flex-col items-center'>
     <h1>Briyani day</h1>
     <div className='flex'>
     <Demo/>
     <Demo1/>
     </div>
    

    </div>
  )
}

export default App
