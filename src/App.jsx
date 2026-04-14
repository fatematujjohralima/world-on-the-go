import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {
  

  return (
    <>
      
        <h1>Let's Discover the World!!</h1>
      
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
