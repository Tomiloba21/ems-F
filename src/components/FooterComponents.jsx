import React from 'react'

export const FooterComponents = () => {
    const date = new Date().getFullYear();
  return (
    
        <footer  className='bg-dark text-center text-lg-start footer'>
        <div className='container p-4'>
            <div className="text-center p-3 text-light" >
                  &copy; {date} Lobzter, Inc. All rights reserved.
            </div>
        </div>
        
      

        </footer>
 
  )
}
