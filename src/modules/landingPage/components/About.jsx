 import Diana from '../assets/img/diana.png'

 function About(){
    return(
        <div id='about' className=' lg:flex block p-6' >
            <div className=' w-full lg:w-1/2'>
                <img src={Diana} alt="Diana"/>
            </div>
            <div className='w-full lg:w-1/2 self-center p-10 lg:px-28'>
            <h1 className=' text-6xl font-extrabold font-Machina'>About Us</h1>
                <p className='text-xl font-Machina mt-4'> Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Veniam reiciendis perferendis
                    asperiores veritatis nostrum voluptas, 
                    doloribus aliquam odit dignissimos saepe consequuntur.
                    Quasi, vel aperiam culpa obcaecati ad quae repudiandae veniam.
                 </p>
            </div>
        </div>
    )
 }

 export default About