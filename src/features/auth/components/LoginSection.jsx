import React from 'react'
import LoginForm from './LoginForm'
import { TreePine } from 'lucide-react'
const LoginSection = () => {

  
  return (
 
  <div className="max-w-7xl min-h-screen w-full mx-auto flex flex-row justify-center items-center gap-10">
    {/* Form Container */}
    <div className="p-6 md:p-10 w-full max-w-xl mx-auto">
      <div className="w-100 space-y-2 mb-8">
        {/* Brand Logo & Name */}
        <div className=" pl-4 w-full flex items-center gap-4 font-extrabold text-xl md:text-2xl text-primary text-royal-gold-800">
          <TreePine className="shrink-0" size={50} />
          <h1 className="">
            Argi-Shield
          </h1>
        </div>
     
        {/* Title */}
        <p className="w-100 text-royal-gold-600  text-2xl md:text-3xl  tracking-widest  font-Roboto font-extrabold">
          Sign to your account
        </p>
      </div>

      {/* Form Component */}
      <LoginForm />
    </div>
  </div>
  )
}

export default LoginSection