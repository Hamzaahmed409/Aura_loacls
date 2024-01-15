// @ts-nocheck 

export default function Success() {

    return (
        <>
        <div className="container relative items-center md:grid lg:max-w-none w-full lg:px-0 h-screen max-md:flex bg-slate-50">
          <div className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative h-full flex-col bg-muted p-4 w-full md:p-10 bg-white lg:flex">
            <div className="block z-0">
              <img
                src="/AURA.png"
                width={100}
                alt="Authentication"
                className="hidden dark:block"
              />
            </div>
      
            <div className='flex flex-col items-center justify-center h-full'>
              <div className="text-center">
                <div className="block z-0">
                  <img
                    src="/success.png"
                    width={656}
                    alt="Authentication"
                    className="hidden dark:block"
                  />
                </div>
                <h1 className="text-2xl color-secondary font-medium mt-6">
                  Your account is set up!
                </h1>
                <p className="text-base text-slate-500 font-medium mt-2 md:mt-6">You can now use Aura to get paid, hassle-free</p>
                <button className='bg-slate-400  md:w-2/4 sm: w-60 h-14 rounded button mt-4 md:mt-6'>LOG ME IN</button>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}