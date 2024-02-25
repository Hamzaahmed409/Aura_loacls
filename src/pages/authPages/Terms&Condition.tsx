import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import 'react-international-phone/style.css';
import {useState} from "react";
import 'react-dropdown/style.css';
import {useNavigate} from 'react-router-dom';
import {toast} from "@/components/ui/use-toast.ts";
import {SignupDto, UserService} from "@/services/api/index"

export default function TermsAndConditions() {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    const {userControllerSignup} = UserService;

    async function onSubmit() {
        if (!isChecked) {
            toast({
                variant: "destructive",
                title: "Please accept terms and conditions",
                description: "You must accept terms and conditions to proceed",
            })
            return;
        }
        let signUpDto: SignupDto = JSON.parse(localStorage.getItem('signup') || '{}');
        const response = await userControllerSignup(signUpDto);
        if (response.id) {
            toast({
                variant: 'default',
                title: "Signed up successfully",
                description: "Welcome to Aura!",
            })
            localStorage.clear();
            navigate('/success');
        } else {
            toast({
                variant: "destructive",
                title: "Failed to sign up",
                description: "Please contact support",
            })
        }
    }

    return (
        <>
            <div
                className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 h-screen max-md:flex bg-slate-50">
                <div
                    className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative hidden h-full flex-col bg-muted p-4 md:p-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-white "/>
                    <div className="block z-0">
                        <img
                            src="/AURA.png"
                            width={100}
                            alt="Authentication"
                            className="hidden dark:block "
                        />
                    </div>
                    <div className="block z-0 my-20">
                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full    w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck}/>
                            </div>
                            <h1 className="text-muted-foreground font-semibold">COMPANY DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full   w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck}/>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="text-muted-foreground font-semibold">COMPANY BANK DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500 h-8 mx-9"></div>
                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full   w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck}/>
                            </div>
                            {/* Vertical Line */}
                            <h1 className=" text-muted-foreground  font-semibold">REPRESENTATIVE DETAILS </h1>
                        </div>
                        <div className="border-l border-green-500 h-8 mx-9"></div>
                        <div className="flex my-2">
                            <div
                                className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="text-muted-foreground">4</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-primary font-semibold ">TERMS & CONDITIONS</h1>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="absolute left-10 bottom-0  bg-white block z-0 ">
                        <img
                            src="/FrameReister.png"
                            alt="Authentication"
                            width={900}
                        />
                    </div>
                </div>


                <div className="lg:col-span-2 w-full items-center justify-center background-color h-full sm:px-1">
                    <div
                        className="flex flex-col py-6 md:py-16 sm:px-4 md:px-10 lg:px-20 justify-center space-y-6 bg-white  h-5/6">
                        {/* <div> */}
                        <h1 className="text-2xl color-primary font-semibold">
                            Terms and Conditions
                        </h1>
                        <h1 className="text-lg text-black font-semibold">
                            Your Agreement
                        </h1>
                        <p className='text-base color-secondary '>Last Revised: December 16, 2013</p>
                        {/* </div> */}
                        <div
                            className="custom-scrollbar terms-container max-h-80 overflow-y-auto p-4 background-color   rounded-md    h-3/4">
                            <p className='text-base color-secondary '>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                here', making it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                over the years, sometimes by accident, sometimes on purpose (injected humour and the
                                like).


                                Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                                theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                                are also reproduced in their exact original form, accompanied by English versions from
                                the 1914 translation by H. Rackham.

                                Where can I get some?
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                making this the first true generator on the Internet. It.</p>
                        </div>

                        <p className="text-black text-sm mt-4">
                            <input
                                required
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            {' '} I confirm that I have read and accept the terms and conditions and privacy
                            policy.{' '}

                        </p>

                        <div className="flex   md w-full items-center  justify-end">
                            <button onClick={() => navigate(-1)} className="mx-8 self-center color-primary ">
                                BACK
                            </button>
                            <button onClick={() => onSubmit()}
                                    className=' justify-self-end bg-slate-400  w-40 items-center h-10 rounded button'>AGREE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}