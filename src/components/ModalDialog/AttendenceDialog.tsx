import  { useState } from "react";
import { connect } from "react-redux";
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import * as Actions  from "@/redux/actions/Actions"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { markAttendence } from '@/services/api';
function AttendenceDialog( props: any) {
  const [isLoading, setIsLoading] = useState(false);

  // const previousSelectedLocation = useSelector((state: any) => state.HeaderReducer?.selectedLocation);
  // const locationId = previousSelectedLocation ? previousSelectedLocation.go_high_level_location_id
  // : props.userAuth.locations[0].go_high_level_location_id;
  const onSubmit = () => {
    setIsLoading(true);
    markAttendence(props.reservation.id, props.locationId).then((response: any) => {
      if(response.success) {
        toast({
          title: response.message,
          description: "Welcome to Aura!",
        })
      } else {
        toast({
          title: 'Something went wrong, Contact Admin.',
          description: response.message,
        })
      }
    }).catch((error: any) => {
      toast({
        title: 'Something went wrong, Contact Admin.',
        description: error.response.data.message,
      })
    }).finally(() => {
      props.hideModal();
      setIsLoading(false);
    })
  };

  return (
    <Dialog open={ props.show} onOpenChange={()=>  props.hideModal()}>
      <DialogContent className="text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Mark Attendence <span className="ms-2">🥳</span></DialogTitle>
            <DialogDescription>
                Please Confirm Your CheckIn
            </DialogDescription>
          </DialogHeader>
            <p className='leading-6'>Hi <b>Shahvaiz</b>, let&apos;s get you checked in for <br/><b>{new Date().toDateString()}</b>.
              <br/></p>
        <DialogFooter className='sm:justify-end'>
          <Button onClick={() =>  props.hideModal()} className='bg-white text-black hover:bg-transparent hover:text-white hover:border hover:border-white' >Cancel</Button>
          <Button onClick={onSubmit} disabled={isLoading} className='bg-green-500 hover:bg-green-500/60 text-white'>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


const mapStateToProps = (state: any) => ({
  show: state.ModalReducer.show,
  reservation: state.ModalReducer.data
});

const mapDispatchToProps = (dispatch: any) => ({
  hideModal: () => {
      dispatch({
          type: Actions.SET_HIDE_MODAL,
          payload: null,
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AttendenceDialog);


