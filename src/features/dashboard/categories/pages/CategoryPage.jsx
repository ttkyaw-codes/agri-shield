import React from 'react'
import Header from '../../components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import CategorySection from '../components/CategorySection'

const CategoryPage = () => {
  return (
    <>
    <Header>
     <BreadCrumb  currentPageTitle={`fertilizers`} />
     <CategorySection/>
    </Header>
    </>
  )
}

export default CategoryPage