// @ts-nocheck 

import { useNavigate } from "react-router-dom"
import { DatePicker } from 'antd';
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from "@/components/ui/use-toast"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faFile } from '@fortawesome/free-solid-svg-icons';

export default function CompanyDetails() {
    const navigate = useNavigate();
    const [statementCheck, setStatementCheck] = useState(false);
    const [concatenatedUrls, serConcatenatedUrls] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [details, setDetails] = useState({
        companyName: '',
        dateOfIncorporated: '',
        turnover: '',
        currency: '',
        Category: ''
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            pdfUpload(file)
            // localStorage.setItem('selectedFile', JSON.stringify({
            //     file
            //  }));
        } else {
            alert('Please select a valid PDF file.');
        }
    };
    const options = [
        'AED', 'USD', 'EUR'
    ];
    const annualTurnOver = [
        '<100,000',
        '100,000-250,000',
        '250,000-500,000',
        '500,000-1,000,000',
        '>1,000,000'
    ]
    const categoryOption = [
        ' Services - Consulting',
        'Services - Education',
        'Services - Financial Services',
        'Services - Healthcare',
        'Services - Hospitality',
        'Services - Information Technology',
        'Services - Legal Services',
        'Services - Marketing and Advertising',
        'Services - Real Estate',
        'Services - Transportation',
        'Trading - Automotive',
        'Trading - Chemicals',
        'Trading - Construction Material',
        'Trading - Consumer Goods',
        'Trading - Electronics',
        'Trading - Food and Beverage',
        'Trading - Furniture and Fixtures',
        'Trading - Machinery and Equipment',
        'Trading - Metals',
        'Trading - Pharmaceuticals',
        'Trading - Plastics and Rubber',
        'Trading - Textiles & clothing',
        'Trading - Wood and Timber',
        'Manufacturing - Aerospace',
        'Manufacturing - Agriculture',
        'Manufacturing - Automotive',
        'Manufacturing - Chemicals',
        'Manufacturing - Construction',
        'Manufacturing - Consumer Goods',
        'Manufacturing - Electronics',
        'Manufacturing - Energy',
        'Manufacturing - Food and Beverage',
        'Manufacturing - Furniture and Fixtures',
        'Manufacturing - Machinery and Equipment',
        'Manufacturing - Metals and Mining',
        'Manufacturing - Paper and Packaging',
        'Manufacturing - Pharmaceuticals',
        'Manufacturing - Plastics and Rubber',
        'Manufacturing - Shipbuilding',
        'Manufacturing - Textiles & clothing',
        'Manufacturing - Wood and Timber',
    ]
    const defaultOption = options[0];

    const pdfUpload = (file) => {
        var formdata = new FormData();
        formdata.append("files", file, file?.name);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://ec2-54-165-34-171.compute-1.amazonaws.com:3000/api/auth/upload", requestOptions)
            .then(response => response.json())
            .then(result => {
                const concatenatedUrls = result?.successfulUploads?.reduce((acc, item) => {
                    return acc + item.url + '\n'; // '\n' for a line break between each URL
                }, '');
                serConcatenatedUrls(concatenatedUrls)
                setStatementCheck(true)
            })
            .catch(error => console.log('error', error));
    }

    let bankDetails = localStorage.getItem('bankDetails');
    bankDetails = JSON.parse(bankDetails)
    let representativeDetails = localStorage.getItem('representativeDetails');
    representativeDetails = JSON.parse(representativeDetails)
    let bankStatmentPdf = localStorage.getItem('bankStatmentPdf');
    bankStatmentPdf = JSON.parse(bankStatmentPdf)
    let tradeLicense = localStorage.getItem('tradeLicense');
    tradeLicense = JSON.parse(tradeLicense)
    
    async function onSubmit() {
        setIsLoading(true)
        if (true) {
            const body = {
                company_name: details.companyName,
                trade_license_no: concatenatedUrls.concatenatedUrls,
                "date_of_incorporation": details.dateOfIncorporated,
                "annual_turnover": details.turnover,
                "business_category": details.Category,
                "credit_consent": true,
                "bank_name": bankDetails.bankDetails.bankName,
                "bank_iban": bankDetails.bankDetails.iban,
                "bank_account_number": '123123123',
                "user_name": representativeDetails.fullName,
                "user_email": representativeDetails.email,
                "user_country_code": representativeDetails.phone.slice(0, 4),
                "user_mobile_no": representativeDetails.phone.slice(4),
                "bank_statement": bankStatmentPdf.concatenatedUrls,
                "terms_and_cond_agreed": true
            }
            signup(body).then((response: any) => {
                console.log(response.user_id)
                if (response.user_id) {
                    setModalIsOpen(true)
                    toast({
                        variant: 'default',
                        title: "SignUp successfully",
                        description: "Welcome to AURA!",
                    })
                    navigate('/terms-&-conditions');
                } else {
                    toast({
                        variant: "destructive",
                        title: "Something went wrong!",
                        description: "Please, Contact support.",
                    })
                }
            }).catch((error: { response: { data: { message: any; }; }; }) => {
                setModalIsOpen(true)

                toast({
                    variant: "destructive",
                    title: "Error!",
                    description: error.response.data.message,

                })
            }).finally(() => {
                setIsLoading(false)
            });
        } else {
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Something is missing!",
                description: "Email, Password are required to login",
            })
        }
    }
    return (
        <>
            <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0  xl:h-screen 2xl:h-screen  lg:h-screen md:h-screen sm:h-full  max-md:flex bg-slate-50 ">

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
                            <div className="flex items-center justify-center rounded-full w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck} />
                            </div>
                            <h1 className="color-primary font-semibold">REPRESENTATIVE DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck} />
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">COMPANY BANK DETAILS</h1>
                        </div>

                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-color color-primary border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="color-primary">3</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">COMPANY DETAILS </h1>
                        </div>
                        <div className="border-l border-gray-300 h-8  mx-9"></div>

                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-6 px-3 mx-6">
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
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            if (selectedFile.length < 1 || details.dateOfIncorporated == '' || details.turnover == "" || details.Category == '') {
                                toast({
                                    variant: "destructive",
                                    title: "Please fill the form first",
                                })
                            }
                            else {
                                onSubmit(true)
                            }
                        }}>

                            <div>
                                <h1 className="block z-0  text-blue-900 text-2xl font-semibold">
                                    Company Details
                                </h1>
                                <p className=" mt-2 text-blue-900 text-sm" >
                                    This details help us understand your business better
                                </p>

                            </div>

                            {/* <form  > */}
                            <div>
                                <h3 className="  text-blue-900 text-lg">
                                    Company name
                                </h3>
                                <input
                                    required
                                    onChange={(e) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            companyName: e.target.value,
                                        }));
                                    }}

                                    placeholder=" Enter company name"
                                    className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2 sm: w-11/12 md:w-3/5" type="text" />
                            </div>
                            <div>
                                <h3 className="  text-blue-900 text-lg">
                                    Upload Trade License Number (.pdf only)
                                </h3>

                                <div className="file-upload field-border-color rounded-lg h-10 border-neutral-200 border-2 sm: w-11/12 md:w-3/5 ">

                                    <input
                                        required
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="  "
                                    />
                                    <h3 className=" text-muted-foreground "> {selectedFile?.name || "Click to upload pdf"}</h3>
                                </div>


                            </div>

                            <div>
                                <h3 className="  text-blue-900 text-lg">
                                    Date of Incorporation
                                </h3>
                                <DatePicker
                                    onChange={(e: any) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            dateOfIncorporated: e,
                                        }));
                                    }}
                                    className=" sm: w-11/12 md:w-3/5  field-border-color border-2 field-border-color h-10 " placeholder=" DD / MM / YYYYY" />
                            </div>

                            <div>
                                <h3 className="  text-blue-900 text-lg">
                                    Annual turnover
                                </h3>
                                <div className=" sm: w-11/12  md:w-3/5 flex">
                                    <Dropdown onChange={(e) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            currency: e.value,
                                        }));
                                    }} options={options} className="w-16" value={defaultOption} placeholder="Select an option" />;
                                    <Dropdown options={annualTurnOver} className=" h-10  w-full  " menuClassName='Dropdown-menu-view'
                                        // value={annualTurnOver[0]} 
                                        onChange={(e) => {
                                            setDetails(prevState => ({
                                                ...prevState,
                                                turnover: e.value,
                                            }));
                                        }}
                                        placeholder="Select an option" />;
                                </div>
                            </div>

                            <div>
                                <h3 className="  text-blue-900 text-lg">
                                    Category of business
                                </h3>
                                <Dropdown options={categoryOption} className=" h-10 sm: w-11/12  md:w-3/5  " menuClassName='Dropdown-menu-view'
                                    value={categoryOption[0]}
                                    onChange={(e) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            Category: e.value,
                                        }));
                                    }}
                                    placeholder="Select an option" />;
                            </div>

                            <div className="bg-white">
                                <div className="flex w-full bg-white">
                                    <input
                                        required
                                        type="checkbox" id="horns" name="horns" />
                                    <p className="  text-sm text-blue-950 px-4">
                                        I give my consent to Aura Networks FZ to pull my credit report from Al Etihad Credit Bureau
                                    </p>
                                </div>
                            </div>

                            <div className="flex  sm:w-3/6 md:w-3/5 items-center  justify-end">
                                <button onClick={() => navigate(-1)} className="mx-8   self-center color-primary    ">
                                    BACK
                                </button>
                                <button
                                    // type='submit'
                                    className=' justify-self-end w-40 items-center h-10  bg-slate-400  rounded-lg'
                                    onClick={() => {
                                        localStorage.setItem('companyDetails', JSON.stringify({
                                            details,

                                        }));
                                        if (statementCheck) {
                                            navigate('/company-bank-details')
                                        } else {
                                            toast({
                                                variant: 'default',
                                                title: "Please submit the pdf first.",
                                            })
                                        }
                                    }}
                                >CONTINUE</button>
                            </div>
                        </form>

                        {/* </form> */}
                    </div>

                </div>
            </div>
        </>
    )
}