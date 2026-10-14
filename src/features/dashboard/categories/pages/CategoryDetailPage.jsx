import React from 'react'
import Header from '../../components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import CategoryDetailSection from '../components/CategoryDetailSection'
import CropDetailSection from '../../Crops/components/CropDetailSection'

const CategoryDetailPage = () => {
return (
    <>
        <Header>
         <BreadCrumb links={[
            {title:"crops",path: "/crops"}
         ]}  currentPageTitle={`details`} />
         <CropDetailSection/>
        </Header>
    </>
  )
}
export default CategoryDetailPage