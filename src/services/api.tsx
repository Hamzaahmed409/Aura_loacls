// @ts-nocheck 

import axios from 'axios';
 import {IP} from './endPoints'
const getCommonHeaders = async headers => {
    if (headers) {
        if (headers['Content-Type'] === undefined) {
            headers['Content-Type'] = 'application/json';
        }
        headers['Access-Control-Allow-Origin'] = '*';
    }

    // let token = await jwt();
    let token = ''


    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return headers;
};
 

export async function apiGet(endPoint, onSuccess, onFailure, token) {
    axios
        .get(IP + endPoint, {
            headers: {
                Authorization: ` Bearer ${token}`,
            },
        })
        .then(response => {
            if (onSuccess) onSuccess(response.data);
        })
        .catch(error => {

            if (onFailure) {
                onFailure(error);

            }
        });
}

export async function apiPost(endPoint, onSuccess, onFailure, body, authToken) {
    let token = authToken

    axios
        .post(IP + endPoint, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (onSuccess) onSuccess(response.data);
        })
        .catch(error => {
            if (onFailure) {
                console.log('api service error', error.message);
                // Toast.show(error.message);
                onFailure(error);
            }

        });
}

export async function apiPut(endPoint, onSuccess, onFailure, body, token) {

    axios
        .put(IP + endPoint, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (onSuccess) onSuccess(response.data);
        })
        .catch(error => {
            if (onFailure) {
                onFailure(error);
            }
        });
}

export async function apiDelete(endPoint, onSuccess, onFailure) {

    let token = ''

    axios
        .delete(IP + endPoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (onSuccess) onSuccess(response.data);
        })
        .catch(error => {
            if (onFailure) {
                // Toast.show(error.message);
                onFailure(error);

            }
        });
}

export async function apiPatch(endPoint, onSuccess, onFailure, body, token) {

    axios
        .patch(IP + endPoint, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (onSuccess) onSuccess(response.data);
        })
        .catch(error => {

            if (onFailure) {
                // Toast.show(error.message);
                onFailure(error);
            }

        });
}



export const signup = (data: any) => {
    const url = `${IP}/auth/signup`
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


export const login = (data: any) => {
    const url = `${IP}/auth/login`
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


export const verify = (data: any) => {
    const url = `${IP}/auth/verify`
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

