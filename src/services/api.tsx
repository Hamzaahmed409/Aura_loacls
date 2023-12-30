import axios from "axios";
import { IP } from "./endPoints";
import store from "@/redux/store/Index";

const locationId = store.getState().HeaderReducer?.selectedLocation;

const getToken = () => {
    let userAuth :any = localStorage.getItem("auth");
    userAuth = JSON.parse(userAuth ?? "{}")
    return userAuth?.token
}

export const getRequest = (url: string, params = undefined, customHeader: any = null) => {
    const token = getToken()
    return new Promise((resolve, reject) => {
        const head = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            },
            params: params ? params : null
        };
        if(customHeader) {
            head.headers = {...head.headers, ...customHeader};
        }
        console.log('header', head, customHeader);
        axios
            .get(url, head)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
};

export const postRequest = (url: string, data: any, params = undefined, customHeader: any = null) => {
    const token = getToken();
    return new Promise((resolve, reject) => {
        const head = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
            params: params ? params : null
        };
        if(customHeader) {
            head.headers = {...head.headers, ...customHeader};
        }
        axios
            .post(url, data, head)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
};

export const putRequest = (url: string, data: any) => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, reject) => {
        const headers = {
            headers: {
                Authorization: token,
                Accept: "application/json",
            },
        };
        axios
            .put(url, data, headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {

                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
};

export const patchRequest = (url: string, data: any) => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, reject) => {
        const headers = {
            headers: {
                Authorization: token,
                Accept: "application/json",
            },
        };
        axios
            .patch(url, data, headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {

                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
};

export const login = (data: any) => {
    const url = `${IP}/login`
    return new Promise((resolve, reject) => {
        const headers = {
            headers: {
                Accept: "application/json",
            },
        };
        axios
            .post(url, data, headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
};

export const createProgram = (data: any,id: any) => {
    const header = {
        locationId: id
    };
    const url = `${IP}/vendor/add-program`;
    return postRequest(url, data,undefined, header);
}

export const getAllMember = (id:any) => {
    const header = {
        locationId: id
    };
    const url = `${IP}/vendor/get-members-by-location`;
    return getRequest(url, undefined,header);
}
export const getMemberDetail = (memberId: any,  id: any) => {
    const header = {
        locationId: id
    };
    const url = `${IP}/vendor/member-details/${memberId}`;
    return getRequest(url,undefined, header );
}

export const getMemberAttendanceSessions = (id: any) => {
    const url = `${IP}/vendor/get-checkins/${id}`;
    return getRequest(url);
}

export const getReservationByMember = (id: any, page: any = undefined,locationId:string|undefined) => {
    const header = {
        locationId: locationId
    };
    let url = `${IP}/vendor/get-reservations-by-member/${id}`;
    if (page) {
        if (page.specificPageUrl) {
            url = page.specificPageUrl;
        }
    }
    const params = page?.pageNo ? `?page=${page?.pageNo}` : '';
    const completeUrl = params ? `${url}${params}` : url;
    return getRequest(completeUrl,undefined,header);
}

export const markAttendence = (reservationId: number, id: any) => {
    const header = {
        locationId: id
    };
    const data = {
        reservationId
    }


    const url = `${IP}/vendor/mark-attendance`;
    return postRequest(url, data,undefined,header);
}

export const getProgramsByLocation = (id: string) =>{
    const header = {
        locationId: id
    };
    const url = `${IP}/vendor/get-programs-by-location`;
    return getRequest(url, undefined, header);
}

export const getPrograms = (id:any, locationId: string|undefined) =>{
    const header = {
        locationId
    };
    const url = `${IP}/vendor/get-programs-by-id/${id}`;
    return getRequest(url, undefined, header);
}


export const getProgramDetails=(id:any,locationId:any)=>{
    const header = {
        locationId
    };

    const url = `${IP}/vendor/program-details/${id}`;
    return getRequest(url, undefined, header);
}



export const checkUserAuth = (data: any) => {
    const url = `${IP}/vendor/authenticate`;
    return postRequest(url, data);
}

export const imageUpload = (url: string, data: any) => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, reject) => {
        const headers = {
            headers: {
                Authorization: token,
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
            },
        };

        axios
            .post(url, data, headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
}


export const deleteRequest = (url: string) => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, reject) => {
        const headers = {
            headers: {
                Authorization: token,
                Accept: "application/json",
                locationId
            },
        };

        axios
            .delete(url, headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ("response" in error) {
                    reject(error);
                } else {
                    reject(error.response);
                }
            });
    });
}; 