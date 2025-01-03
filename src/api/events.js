import axios from 'axios';

import {URL} from "@env";

const API = 'http://192.168.1.130:4000/api/events'


export const createEvent = async (userId, event) => {
    try {
        console.log(userId, event);
        const { data } = await axios.post(`${URL}/events/registerEvent/${userId}`, event, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(data);
        return(data);
    } catch (error) {
        if(error.response) {
            alert(error.response?.data.msg);
        }
    }
}

export const fetchEvents = async (userId) => {
    try {
        const { data } = await axios(`${API}/getEvents/${userId}`);
        return(data);
    } catch (error) {
        if(error.response) {
            alert(error.response?.data.msg);
        }
    }
};

export const updateEvent = async (userId, updatedEvent) => {
    try {
        const { data } = await axios.put(`${API}/updateEvent/${userId}`, updatedEvent);
        return(data);
    } catch (error) {
        if(error.response) {
            alert(error.response?.data.msg);
        }
    }
}

export const removeEvent = async (eventId, userId) => {
    try {
        const { data } = await axios.delete(`${API}/deleteEvent/${userId}/${eventId}`);
        return(data);
    } catch (error) {
        if(error.response) {
            alert(error.response?.data.msg);
        }
    }
}