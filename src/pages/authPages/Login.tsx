import AuthForm from "@/components/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  return (
    <>
     
      <div className=" container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen max-md:flex bg-slate-50">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white  lg:flex items-center justify-center">
          <div className="absolute inset-0 bg-white " />
          <div className="block z-0" >
            <img
              src="/Frame.png"
              width={500}
              // height={500}
              alt="Authentication"
              className="hidden dark:block"
            />

          </div>
        </div>

        <div className="lg:p-8 bg-slate-50">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col    ">
              <img
                src="/AURA.png"
                width={172}
                height={48}
                alt="Authentication"
                className="hidden dark:block mb-2"
              />
              <h1 className="text-xl font-normal  text-blue-900">
                Login into your account
              </h1>

            </div>
            <AuthForm />
            <p className="  text-sm text-muted-foreground">
            Don't have an account
              < button
              onClick={()=>{
                navigate('/company-details')
              } }
                className="text-blue-900"
                // className="underline underline-offset-4 hover:text-primary"
              >
               ? Register now
              </button>
             
            </p>
          </div>
        </div>
      </div>
    </>
  )
}