import { getCountryDetails,getEmployeeDetail,gethome, getList, getProfile } from './serviceCall';


export async function getCountryData  () {
        try {
            const { error, data } =  await getCountryDetails()
            // console.log('THE DATAAAAAA',data)
            if (data.status == 1) {
                return { error:false,response:data }
            } else {
                return { error:true, message:data.message }
            }
        } catch (error) {
            return { error: true, message: "network error"}
        }
    }


  export  async function  getEmployeeDetails (req) {
        try {         
            const { error, data } = await getEmployeeDetail(req)
                // console.log('THE DATAAAAAA',data)
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





        export  async function  getTradesDetails (req) {
            try {         
                const { error, data } = await gethome(req)
                    //  alert('THE DATAAAAAA'+ JSON.stringify(data))
                    if (data) {
                            return {error:false, response: data }
                        } else {               
                            return {error:true, message: data.message}
                        }
                        } catch (error) {
                            return { error:true, message: "network error"}
                    }
            }



            export  async function  getTradesLists (req) {
                try {         
                    const { error, data } = await getList(req)
                        //  alert('THE DATAAAAAA'+ JSON.stringify(data))
                        if (data) {
                                return {error:false, response: data }
                            } else {               
                                return {error:true, message: data.message}
                            }
                            } catch (error) {
                                return { error:true, message: "network error"}
                        }
                }


                export  async function  getTradesProfiles (req) {
                    try {         
                        const { error, data } = await getProfile(req)
                            //  alert('THE DATAAAAAA'+ JSON.stringify(data))
                            if (data) {
                                    return {error:false, response: data }
                                } else {               
                                    return {error:true, message: data.message}
                                }
                                } catch (error) {
                                    return { error:true, message: "network error"}
                            }
                    }