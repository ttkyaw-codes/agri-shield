import Container from '@/components/Container'
import React from 'react'
import Header from '../components/Header'
import DashboardSection from '../components/DashboardSection'

const DashboardPage = () => {
  return (
    <>
    <Container>
         <Header>
            <DashboardSection/>
        </Header>
    </Container>
       
    </>
  )
}

export default DashboardPage