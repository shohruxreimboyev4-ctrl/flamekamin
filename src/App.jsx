import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Advantages from './components/Advantages'
import Categories from './components/Categories'
import Products from './components/Products'
import Promotional_Models from './components/Promotional_Models'
import Customer_Reviews from './components/Customer_Reviews'
import About_Us from './components/About_Us'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Advantages />
      <Categories />
      <Products />
      <Promotional_Models />
      <Customer_Reviews />
      <About_Us />
      <Footer />
    </div>
  )
}

export default App