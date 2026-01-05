import React from 'react'
import Header from './components/Header'
import Category from './components/Category'
import Footer from './components/Footer'
import Service from './components/Service'
import PeopleViewed from './components/PeopleViewed'
import GetTheApp from './components/GetTheApp'
import Blog from './components/Blog'
import JustArrived from './components/JustArrived'
import MostPopular from './components/MostPopular'
import BestSellingProducts from './components/BestSellingProducts'
import Contact from './components/Contact'
import PromoBanner from './components/PromoBanner'
import TrendingProducts from './components/TrendingProducts'
import NewlyArrivedBrands from './components/NewlyArrivedBrands'
import CategorySection from './components/CategorySection'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <>
      <Header/>
      <Category/>
      <HomeSection/>
      <CategorySection/>
      <NewlyArrivedBrands/>
      <TrendingProducts/>
      <PromoBanner/>
      <BestSellingProducts/>
      <Contact/>
      <MostPopular/>
      <JustArrived/>
      <Blog/>
      <GetTheApp/>
      <PeopleViewed/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App