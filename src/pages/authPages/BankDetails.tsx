import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faFile } from '@fortawesome/free-solid-svg-icons';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function CompanyDetails() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState([]);
    const [bankDetails, setBankDetails] = useState({
        bankName: '',
        iban: '',
        accountNumber: '',

    });
    console.log(selectedFile);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile([...selectedFile, file]);
            // localStorage.setItem('selectedFile', JSON.stringify({
            //     file
            // }));
        } else {
            alert('Please select a valid PDF file.');
        }
        // if (file && file.type === 'application/pdf') {
        //     setSelectedFile(file);
        //     localStorage.setItem('selectedFile', JSON.stringify({
        //         file
        //      }));
        // } else {
        //     alert('Please select a valid PDF file.');
        // }
    };
    return (
        <>
            <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 h-screen max-md:flex bg-slate-50">
                <div className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative hidden h-full flex-col bg-muted p-4 md:p-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-white " />
                    <div className="block z-0" >
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
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck} />

                            </div>
                            <h1 className="text-muted-foreground font-semibold">COMPANY DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full border-color color-primary border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="color-primary">2</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-primary font-semibold">COMPANY BANK DETAILS</h1>
                        </div>
                        <div className="border-l border-gray-300 h-8 mx-9"></div>
                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="text-muted-foreground">3</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">REPRESENTATIVE DETAILS </h1>
                        </div>
                        <div className="border-l border-gray-300 h-8  mx-9"></div>

                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="text-muted-foreground">4</h1>
                            </div>  {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">TERMS & CONDITIONS</h1>
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
                <div className="lg:col-span-2 w-full items-center justify-center background-color h-full">
                    <div className="flex w-full flex-col py-6 md:py-16 px-4 md:px-10 lg:px-20 justify-center space-y-6">
                        <div>
                            <h1 className="block z-0  text-blue-900 text-2xl font-semibold">
                                Company Bank Details
                            </h1>
                            <p className=" mt-2 text-blue-900 text-sm" >
                                You will recive payment in bank account
                            </p>
                        </div>
                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Bank name
                            </h3>
                            <input
                                onChange={(e) => {
                                    setBankDetails(prevState => ({
                                        ...prevState,
                                        bankDetails: e.target.value,
                                    }));
                                }}
                                placeholder=" Enter bank name"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2  field-border-color rounded-lg h-10 border-2 sm: w-11/12 md:w-3/5" type="text" />

                        </div>
                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                IBAN
                            </h3>
                            <input
                                onChange={(e) => {
                                    setBankDetails(prevState => ({
                                        ...prevState,
                                        iban: e.target.value,
                                    }));
                                }}
                                placeholder=" Input bank IBAN"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2 border-neutral-200 rounded-lg h-10 border-2  sm: w-11/12  md:w-3/5 " type="text" />
                        </div>

                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Account number
                            </h3>
                            <input
                                onChange={(e) => {
                                    setBankDetails(prevState => ({
                                        ...prevState,
                                        accountNumber: e.target.value,
                                    }));
                                }}
                                placeholder=" Input your company account number"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2 border-neutral-200 rounded-lg h-10 border-2  sm: w-11/12  md:w-3/5 " type="text" />
                        </div>

                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Bank statment
                            </h3>

                            <div className=' flex w-1/2'>
                                <div className=' flex' >
                                    {
                                        selectedFile.map((e) => {
                                            return (
                                                <div className="file-upload field-border-color rounded-lg h-32 border-neutral-200 border-2 w-36 p-2 flex items-center justify-center m-2">
                                                    <FontAwesomeIcon className="mr-2 h-8 color-primary" icon={faFile} />
                                                    <h3 className="color-primary">
                                                        {e.name.length > 10 ? e.name.substring(0, 15) + '...' : e.name}
                                                    </h3>
                                                </div>


                                            )
                                        })
                                    }
                                </div>

                                {
                                    selectedFile.length < 6 ?
                                        <div className="file-upload field-border-color rounded-lg h-32 border-neutral-200 border-2  w-36 text-center m-2">
                                            <input
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                className="  "
                                            />
                                            {/* <h3 className=" text-muted-foreground mt-10 "> {selectedFile?.name || "Click to upload pdf"}</h3> */}
                                            <h3 className=" text-muted-foreground mt-10 ">Click to upload pdf</h3>
                                        </div> : null
                                }



                            </div>

                        </div>

                        <div className=" flex">
                            <input type="checkbox" id="horns" name="horns" />
                            <p className="  text-sm text-blue-950 px-4">
                                I give my consent to Aura Networks FZ to pull my credit report from Al Etihad Credit Bureau
                            </p>
                        </div>

                        <div className="flex  sm:w-3/6 md:w-3/5 items-center  justify-end">
                            <button onClick={() => navigate(-1)} className=" mx-8  self-center color-primary   ">
                                BACK
                            </button>
                            <button onClick={() => {
                                localStorage.setItem('bankDetails', JSON.stringify({
                                    bankDetails,

                                }));
                                navigate('/representative-details')
                            }} className='justify-self-end  w-40 items-center h-10  bg-slate-400  rounded-lg' >COUNTINUE</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}