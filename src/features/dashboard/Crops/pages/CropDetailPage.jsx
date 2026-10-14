"use client";

import React from 'react'
import Header from '../../components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import CropDetailSection from '../components/CropDetailSection'
import CropDetailSkeleton from '../components/CropDetailSkeleton'
import useCropDetail from '../hooks/useCropDetail'

const CropDetailPage = () => {
  const { crop, isLoading, error } = useCropDetail();

  return (
    <>
      <Header>
        <BreadCrumb 
          links={[
            { title: "crops", path: "/crops" }
          ]} 
          currentPageTitle="details" 
        />
        
        {isLoading ? (
          <CropDetailSkeleton />
        ) : error ? (
          <div className="p-8 text-center text-red-500">
            သီးနှံအချက်အလက်များကို ရယူ၍မရပါ။ (Failed to load crop details.)
          </div>
        ) : (
          <CropDetailSection crop={crop} />
        )}
      </Header>
    </>
  )
}

export default CropDetailPage