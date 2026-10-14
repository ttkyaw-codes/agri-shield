import React from 'react'
import Header from '../../components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import CategoryDetailSection from '../components/CategoryDetailSection'

const CategoryDetailPage = () => {
return (
    <>
        <Header>
         <BreadCrumb links={[
            {title:"fertilizers",path: "/fertilizers"}
         ]}  currentPageTitle={`details`} />
         <CategoryDetailSection />
        </Header>
    </>
  )
}
export default CategoryDetailPage