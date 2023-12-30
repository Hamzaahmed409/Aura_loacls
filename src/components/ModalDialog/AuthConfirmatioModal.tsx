// @ts-nocheck 

import  { useState } from 'react'
import Modal from 'react-modal'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { checkUserAuth } from '@/services/api';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from '@/components/ui/use-toast';

export default function AuthConfirmatioModal(props: { onUserAuthCheck: () => void; modalIsOpen: boolean; closeModal: () => void; isLoading: boolean | undefined; }) {
    const [isLoading] = useState(false);
    const [password, setPassword] = useState('vendor123!');
    const userAuthDetail = localStorage.getItem('auth');
    const parsedData = JSON.parse(userAuthDetail?? "{}")
    const onUserCheck = () => {
        const body = {
            'email': parsedData.email,
            "password": password
        }
        checkUserAuth(body).then((response:any) => {
            console.log(response?.message);
            if (response?.message == 200) {
                props.onUserAuthCheck()

            }
            else {
                toast({
                    title: "Invalid Credentials",
                })
            }
        }).catch(() => {
            toast({
                title: "Server error",
            })
        })
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '30%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            zIndex: 1,
            display:'flex',
            flexDirection:'column',
            alignItems:'end',
        },
        overlay: {
            backgroundColor: 'rgb(0 0 0 / 80%)',
          },
    };
    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >  
             <Button onClick={()=>{
                props.closeModal()
             }} className='mb-2 p-0 w-6 h-6' >
                    X
                </Button>
                <div className="grid gap-3 w-full">

                    <Input
                        required
                        id="password"
                        placeholder="Password"
                        autoComplete="password"
                        type="password"
                        disabled={isLoading}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="grid gap-3 my-5 w-full">
                    <Button onClick={() => onUserCheck()}
                        // disabled={props.isLoading}
                    >
                        {/* {props.isLoading && (
                            <FontAwesomeIcon className="mr-2 h-4 w-4" icon={faSpinner} spin />
                        )} */}
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
