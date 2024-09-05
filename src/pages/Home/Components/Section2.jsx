import React from 'react'
import "../assets/css/section2.css"

const Section2 = () => {
    return (

        <section id='sec2' className='flex'>

            <div className="con flex">

                <div className="sec2Left">
                    <p>The financial visibility you need to be a data-driven decision maker.</p>
                    <p>We take care of your financial operations so you can lead your startup more effectively.</p>
                </div>
                <div className="sec2Right">

                    <video autoPlay loop muted playsInline>
                        <source src="https://cdn.prod.website-files.com/6448cf5dd9cba41a73db0e5f/644e8628a0c93f42d1928ce7_Masthead-transcode.mp4" type='video/mp4'/>
                    </video>
                    

                </div>

            </div>

        </section>

    )
}

export default Section2