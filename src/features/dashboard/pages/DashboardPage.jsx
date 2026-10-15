import Container from '@/components/Container'
import React from 'react'
import Header from '../components/Header'
import DashboardSection from '../components/DashboardSection'
import DashboardMiddlware from '@/components/DashboardMiddleWare'
const DashboardPage = () => {
  return (
    <DashboardMiddlware>
    <Container>
         <Header>
            <DashboardSection/>
        </Header>
    </Container>
       
    </DashboardMiddlware>
  )
}

export default DashboardPage