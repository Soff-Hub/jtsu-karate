import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fastapi.modme.uz/api/v1/leads/lead',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
  });

class Leads {
    async newLead(data) {
        let newData = {
            ...data,
            branch_id: 3692,
            comment: "Saytdan Yangi Lid",
            course: "Front-end",
            section: "Saytdan"
        }
        let params = ''
        for (const key in newData) {
            params += key + '=' + newData[key] + '&'
        }
        
        let lead = await instance.post(`https://fastapi.modme.uz/api/v1/leads/lead?${params}`)
        .then(ress => {
            return ress.data
        })
        .catch(err => {
            return err
        })

        return lead
    }
}

export default new Leads