**perticise**
name 
chemical
image
disease
time_used
guide_used
advantage

**fertilizer**
 brand_name
 product_name
 chemical_name
 product_used_time
 product_used_limit
  description
   prices
    advatage
     image 

**Crop**
name
variety
planting_method
 harvesting
  plant_shape
   soil_type 
    climate


**PerticiseHistory**
user
perticise
 crop

 **fertilizerHistory**
  soil
   ph 
   moisture
    ec 
    carbon 
    N
     P 
      K 
      Tempature
       humdity 
        crop_type 
         crop_growth
         irrigation
          probability 
           fertilizer_type
            user

**CropHistory**
crop
user
N
P
K
 probability
 rainfall 
  temperature 
   humidity
    ph 
     soil



**FertilizerHistoryItem -> FertilizerHistory**
history
fertilizer




**Link**
api/account/register/verify-otp
api/account/register/
api/account/login/
api/account/login/verfiy-otp





api/fertilizers/
api/fertilizers/1
api/crops
api/crops/2




