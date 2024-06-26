import Brad from '../assets/img/brad.png'
import About from '../components/About';
import { useEffect } from 'react';
function Home() {
    const FileUrl = 'https://express-production.up.railway.app/get'

    useEffect(() => {
        const initiateDownload = () => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = FileUrl;
            document.body.appendChild(iframe);
            console.log('ran')
        }
        initiateDownload()
    }, [])

    return (
        <>
            <div className='lg:flex block pt-12 lg:p-auto shadow-lg' style={{ background: '#015871' }}>
                <div className=' w-full lg:w-1/2 self-center p-10 lg:px-28 text-white'>
                    <h1 className='text-6xl font-extrabold font-Machina'><span className=' font-V'>V-</span>Learn</h1>
                    <p className='text-xl font-Machina mt-4'> Welcome to V-learn, your gateway to the future of education. Our platform redefines learning with state-of-the-art virtual classrooms for students and educators. Explore a wide range of courses, participate in interactive lessons, and collaborate in real-time, all from the comfort of your home. At V-learn, we make high-quality education accessible, engaging, and effective. Step into the next generation of learning, where knowledge knows no boundaries.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 p-7 relative'>
                    <img src={Brad} alt="brad" className='absolute w-2/4 lg:w-auto ' />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 225">

                        <path fill="#FFF">
                            <animate
                                attributeName="d"
                                dur="5s"
                                repeatCount="indefinite"
                                values="M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97
	                    c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;

                        M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97
	                    c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;

                        M123.63,4.78C41.5,14.05,16.11-16.94,13.02,15.7C3,121.55,0.78,223.54,63.69,188.97
	                    c86.31-47.42,155.03-3.67,172.27-78.99C247.5,59.55,219.5-17.95,123.63,4.78z;

                        M123.63,4.78C41.5,14.05,29.65-14.91,13.02,15.7C-7,52.55-6.32,204.81,63.69,188.97
	                    c74.81-16.92,143.01-7.48,172.27-78.99C252.5,69.55,212.5-8.45,123.63,4.78z;
								
						M123.63,4.78C58.88,12.27,34.28-11.9,13.02,15.7C-4.75,38.48-14.32,153.77,63.69,188.97
	                    c68.24,30.8,138.63-9.43,172.27-78.99C255.75,69.05,193.75-5.76,123.63,4.78z;">
                            </animate>
                        </path>
                    </svg>
                </div>
            </div>
            <About />
        </>
    )
}

export default Home;