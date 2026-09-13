
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Technology from './Components/Technology/Technology'
import type { TechTypes } from './Components/types/TechTypes'
import LoadingSpinner from './Components/loader'
  

const TechFetch = async (): Promise<TechTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
 
  const TechFetchPromise = TechFetch();
  console.log(TechFetchPromise);

  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<div><LoadingSpinner /></div>}>
        <Technology  TechFetchPromise={TechFetchPromise}/>
      </Suspense>
      
      <Footer />

      
    </>
  )
}

export default App
