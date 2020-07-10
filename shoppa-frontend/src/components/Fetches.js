const API_URL = "http://localhost:3001/";

export const getToken = () => {
    return localStorage.getItem("userJWT");
};

export const fetchGetWithToken = (path, method = "get") => {
    return fetch(`${API_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};

export const fetchPostWithToken = (path, payload) => {
    const configObj = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    };
    // console.log(configObj);
    return fetch(`${API_URL}${path}`, configObj);
};

export const fetchPatchWithToken = (path, payload) => {
    const configObj = {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    };
    // console.log(configObj);
    return fetch(`${API_URL}${path}`, configObj);
};

export const deleteList = (id) => {
    const configObj = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    fetch(`${API_URL}lists/${id}`, configObj)
        .then((res) => res.json())
        .then(console.log);
};
