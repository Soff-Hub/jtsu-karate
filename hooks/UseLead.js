import {useState, useEffect, useRef} from 'react'
import Leads from "/repositories/leads";

const days = (date_1, date_2) =>{

    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}

export default function UseLead() {
    const nameRef = useRef();
    const phoneRef = useRef();
    const [leadStatus, setLeadStatus] = useState(false);

    // useEffect(() => {
    //     let localLeadStatus = localStorage.getItem("leadStatus")
    //     if(localLeadStatus) {
    //         let date_1 = new Date(JSON.parse(localStorage.getItem("leadStatus"))?.date)
    //         let date_2 = new Date();

    //         if(date_1 && date_2){
    //             if(days(date_1, date_2) >= 1){
    //                 setLeadStatus(localStorage.getItem("leadStatus"))
    //             }
    //         }
    //     }
    // }, [])

  return {
    leadStatus: leadStatus,
    nameRef: nameRef,
    phoneRef: phoneRef,
    handleSubmit: async (e) => {
        e.preventDefault()
        let user = {
            name: nameRef.current.value,
            phone: phoneRef.current.value
        }

        let newLeadData = await Leads.newLead(user)
        if(newLeadData){
            nameRef.current.value = ''
            phoneRef.current.value = ''

            // let date = new Date()
            // localStorage.setItem('leadStatus', JSON.stringify({...user, date}))
            setLeadStatus(true)

            setTimeout(() => {
                setLeadStatus(false)
            }, 9000);
        }
    }
  }
}
