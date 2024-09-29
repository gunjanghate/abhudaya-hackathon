import React from 'react'
import Slider from './Slider'
import Image from 'next/image'
import Link from 'next/link'
const Body = () => {
  return (
    <div className='body min-h-screen'>
        <div className="slider flex flex-col md:flex-row lg:flex-row justify-centre items-center gap-12">
            <div className="adhaar-info flex flex-col bg-orange-200 w-60 justify-center items-center">
                <div className="adhaar-up">
                   <Image
                   src={"https://drive.google.com/uc?export=view&id=1uhPN3lSvpXOc6o34vn5pj2mpWhchmEJn"}
                   width={200}
                   height={200}
                   /> 
                </div>
                <div className="adhaar-down text-center">
                    <Link href="/pages/adhar-guide">
                    Guidelines for Aadhaar linking to bank account
                    </Link>
                    </div>
            </div>
            <div>
              <Slider/>
            </div>
        </div>
    </div>
  )
}

export default Body