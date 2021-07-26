import { getCountryDetails,getEmployeeDetail } from './serviceCall';


export  function getCountryData  () {
        try {
            const { error, data } =  getCountryDetails()
            if (data.status = 1) {
                return { error:false,response:data }
            } else {
                return { error:true, message:"no data found" }
            }
        } catch (error) {
            return { error: true, message: "network error"}
        }
    }


  export  async function  getEmployeeDetails (req) {
        try {
         
            const { error, data } = await getEmployeeDetail(req)
                console.log('THE DATAAAAAA',data)
            if (data.status == 1) {
                return {error:false, response: data }
            } else {
               
                return {error:true, message: data.message}
            }
        } catch (error) {
            //console.log(error)
            // this.setError(error.message)
            return { error:true, message: "network error"}
        }
    }

