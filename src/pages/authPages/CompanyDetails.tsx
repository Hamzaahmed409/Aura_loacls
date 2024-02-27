import {useNavigate} from "react-router-dom"
import {DatePicker} from 'antd';
import {SetStateAction, useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {toast} from "@/components/ui/use-toast"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {DocumentService, SignupDto, UserService} from "@/services/api/index";
import {annualTurnOver, avgInvoices, categoryOption, currencyOptions, DocumentType} from "@/services/constants.ts";

export default function CompanyDetails() {
    const {documentControllerUploadFiles} = DocumentService;
    const {userControllerSignup} = UserService
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState(false);
    const [agrement, setAgrement] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File>(undefined);
    const [details, setDetails] = useState({
        companyName: '',
        dateOfIncorporation: '',
        turnover: annualTurnOver[0],
        currency: currencyOptions[0],
        category: categoryOption[0],
        avgInvoices: avgInvoices[0],
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            pdfUpload(file);
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    const defaultCurrencyOption = currencyOptions[0];
    const defaultAnnualTurnOverOption = annualTurnOver[0];
    const defaultAvgInvoiceOption = avgInvoices[0];
    const defaultCategoryOption = categoryOption[0];

    const pdfUpload = async (file: File) => {
        setSelectedFile(file);
        let representativeDetails = JSON.parse(localStorage.getItem('representativeDetails') || '{}');
        const uploadData = {
            files: [file],
            folder_name: DocumentType.TRADE_LICENSE,
            seller_id: representativeDetails.seller_id,
            is_perfios: false,
            document_type: DocumentType.TRADE_LICENSE
        };
        try {
            const response = await documentControllerUploadFiles(uploadData);
            if (response.successfulUploads.length > 0) {
                setUploadStatus(true);
                toast({
                    variant: 'default',
                    title: "Trade license uploaded successfully",
                    description: "Upload",
                })
            } else {
                throw new Error('Failed to upload');
            }
        } catch (error) {
            toast({
                variant: "destructive", title: "Error!", description: "Failed to upload trade license.",
            });
        }
    }

    let representativeDetails = JSON.parse(localStorage.getItem('representativeDetails'));

    async function onSubmit() {
        const signUp: SignupDto = {
            user_id: representativeDetails.user_id,
            seller_id: representativeDetails.seller_id,
            company_name: details.companyName,
            company_registered_name: details.companyName,
            avg_num_invoices: details.avgInvoices,
            date_of_incorporation: details.dateOfIncorporation,
            annual_turnover: details.turnover,
            business_category: details.category
        }
        try {
            if (uploadStatus == false) {
                toast({
                    variant: "destructive",
                    title: "Please upload trade license again",
                    description: "Upload",
                })
                return
            }
            localStorage.setItem('signup', JSON.stringify(signUp));
            navigate('/terms-&-conditions');
        } catch (error) {
            throw new Error("Failed to sign-up. Please contact administrator");
        }
    }

    return (
        <>
            <div
                className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0  xl:h-screen 2xl:h-screen  lg:h-screen md:h-screen sm:h-full  max-md:flex bg-slate-50 ">

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
                            <div className="flex items-center justify-center rounded-full w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck}/>
                            </div>
                            <h1 className="color-primary font-semibold">REPRESENTATIVE DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck}/>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">COMPANY BANK DETAILS</h1>
                        </div>

                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2">
                            <div
                                className="flex items-center justify-center rounded-full border-color color-primary border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="color-primary">3</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">COMPANY DETAILS </h1>
                        </div>
                        <div className="border-l border-gray-300 h-8  mx-9"></div>

                        <div className="flex my-2">
                            <div
                                className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-6 px-3 mx-6">
                                <h1 className="text-muted-foreground">4</h1>
                            </div>
                            {/* Vertical Line */}
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
                            if (selectedFile === undefined || details.dateOfIncorporation == '' || details.turnover == "" || details.category == '') {
                                toast({
                                    variant: "destructive",
                                    title: "Please fill the form first",
                                })
                            } else {
                                onSubmit()
                            }
                        }}>

                            <div style={{marginBottom: "10px"}}>
                                <h1 className="block z-0  text-blue-900 text-2xl font-semibold">
                                    Company Details
                                </h1>
                                <p className=" mt-2 text-blue-900 text-sm">
                                    This details help us understand your business better
                                </p>

                            </div>
                            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                                <h3 className="  text-blue-900 text-lg">
                                    Company Name
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
                                    className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2 sm: w-11/12 md:w-3/5"
                                    type="text"/>
                            </div>
                            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                                <h3 className="  text-blue-900 text-lg">
                                    Upload Trade License Number (.pdf only)
                                </h3>

                                <div
                                    className="file-upload field-border-color rounded-lg h-10 border-neutral-200 border-2 sm: w-11/12 md:w-3/5 bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2 sm: w-11/12 md:w-3/5">

                                    <input
                                        
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="  "
                                    />
                                    <h3 className=" text-muted-foreground "> {selectedFile ? selectedFile.name : "Click to upload pdf"}</h3>
                                </div>


                            </div>
                            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                                <h3 className="  text-blue-900 text-lg">
                                    Date of Incorporation
                                </h3>
                                <DatePicker
                                    onChange={(e: any) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            dateOfIncorporation: e,
                                        }));
                                    }}
                                    className="bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2 sm: w-11/12 md:w-3/5"
                                    placeholder=" DD / MM / YYYYY"/>
                            </div>
                            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                                <h3 className="text-blue-900 text-lg">
                                    Annual Turnover
                                </h3>
                                <div className=" sm: w-11/12  md:w-3/5 flex">
                                    <Dropdown onChange={(e) => {
                                        setDetails(prevState => ({
                                            ...prevState,
                                            currency: e.value,
                                        }));
                                    }} options={currencyOptions} className="w-16" value={defaultCurrencyOption}
                                              placeholder="Select an option"/>;
                                    <Dropdown options={annualTurnOver} className=" h-10  w-full  "
                                              value={defaultAnnualTurnOverOption}
                                              menuClassName='Dropdown-menu-view'
                                              onChange={(e) => {
                                                  setDetails(prevState => ({
                                                      ...prevState,
                                                      turnover: e.value,
                                                  }));
                                              }}
                                              placeholder="Select an option"/>;
                                </div>
                            </div>
                            <div style={{marginTop: "5px", marginBottom: "15px"}} className="mb-3">
                            <h3 className="  text-blue-900 text-lg">
                                    Average No. of Sale Invoices Issued per Month
                                </h3>
                                <div className=" sm: w-11/12  md:w-3/5 flex">
                                    <Dropdown options={avgInvoices} className=" h-10  w-full"
                                              value={defaultAvgInvoiceOption}
                                              menuClassName='Dropdown-menu-view'
                                              onChange={(e) => {
                                                  setDetails(prevState => ({
                                                      ...prevState,
                                                      avgInvoices: e.value,
                                                  }));
                                              }}
                                              placeholder="Select an option"/>;
                                </div>
                            </div>
                            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                                <h3 className="  text-blue-900 text-lg">
                                    Category of Business
                                </h3>
                                <Dropdown options={categoryOption} className=" h-10 sm: w-11/12  md:w-3/5  "
                                          value={defaultCategoryOption}
                                          menuClassName='Dropdown-menu-view'
                                          onChange={(e) => {
                                              setDetails(prevState => ({
                                                  ...prevState,
                                                  category: e.value,
                                              }));
                                          }}
                                          placeholder="Select an option"/>;
                            </div>

                            <div className="bg-white">
                                <div className="flex w-full bg-white">
                                    <input
                                        required
                                        onClick={()=>{
                                            setAgrement(!agrement)
                                        }}
                                        type="checkbox" id="horns" name="horns"/>
                                    <p className="  text-sm text-blue-950 px-4">
                                        I give my consent to Aura Networks FZ to pull my credit report from Al Etihad
                                        Credit Bureau
                                    </p>
                                </div>
                            </div>
                            <div  style={{marginTop: "10px"}} className="flex  sm:w-3/6 md:w-3/5 items-center  justify-end">
                                <button onClick={() => navigate(-1)} className="mx-8   self-center color-primary    ">
                                    BACK
                                </button>
                                <button
                                    className={` justify-self-end w-40 items-center h-10  ${agrement ? 'bg-blue-700': 'bg-slate-400' }   rounded-lg`}
                                >CONTINUE
                                </button>
                            </div>
                        </form>

                        {/* </form> */}
                    </div>

                </div>
            </div>
        </>
    )
}