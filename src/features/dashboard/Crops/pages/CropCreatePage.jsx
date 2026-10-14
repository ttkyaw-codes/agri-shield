import React from 'react'
import Header from '../../components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import CropCreateSection from '../components/CropCreateSection'

const CropCreatePage = () => {
  return (
    <>
      <Header>
        <BreadCrumb 
          links={[
            { title: "Crops", path: "/crops" }
          ]}  
          currentPageTitle="create" 
        />
        <CropCreateSection />
      </Header>
    </>
  )
}

export default CropCreatePage