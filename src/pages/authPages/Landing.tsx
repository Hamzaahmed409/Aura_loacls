import Header from '@/components/Header/Header'
import { Button } from '@/components/ui/button'
import {useNavigate} from "react-router-dom";
export default function Landing() {
    const navigate = useNavigate();
    return (
        
        <div className=' bg-white  h-screen block' >
            <div className=' absolute w-full'>
            <Header />
            </div>
            <div className='flex flex-col items-center justify-center container landing-bg-image'>
                <div className='mb-2'>
                    <img
                        src="/AURA.png"
                        width={172}
                        height={48}
                        alt="Authentication"
                        className="hidden dark:block"
                    />
                </div>

                <h1 className='color-secondary text-center text-6xl mt-10'>
                    Prototype
                </h1>

                <p className='color-text text-2xl text-center mt-8'>
                    A small business registers with Aura and creates a
                </p>

                <p className='color-text text-2xl text-center'>
                    job to get paid on the invoice date.
                </p>

                <Button onClick={() => { navigate('/login') }}  className='button rounded-3xl w-32 h-12 text-white mt-8'>
                    Get started
                </Button>
            </div>
            <div className='bg-white w-screen'>
            <img
                            src="/login.svg"
                            alt="Authentication"
                            className=' w-screen'
                        />
            </div>
        </div>
    )
}
