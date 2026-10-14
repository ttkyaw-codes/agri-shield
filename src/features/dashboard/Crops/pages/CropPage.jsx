import Container from '@/components/Container'
import React from 'react'
import Header from '@/features/dashboard/components/Header'
import CropSection from '../components/CropSection'
import DashboardMiddlware from '@/components/DashboardMiddleWare'

const CropPage = () => {
  return (
    <>
    <DashboardMiddlware>
       <Container>
           <Header>
              <CropSection/>
          </Header>
      </Container>
    </DashboardMiddlware>
   
       
    </>
  )
}

export default CropPage