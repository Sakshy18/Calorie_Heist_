import React from 'react'
import DailyMealCard from './DailyMealCard'
import './Food.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DailyIntake() {


    const history = useHistory();

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    if (!token)
        history.push("/");

    const [data, setData] = useState();
    const [check, setCheck] = useState(true);


    useEffect(() => {

        const apiUrl = "http://localhost:3001/api/intakeFood";
        axios({
            method: 'GET',
            url: apiUrl,
            mode: 'cors',
            headers: {
                authtoken: localStorage.getItem('token')
            }
        }, function (error, response, body) {
            // console.log(response.json());
            if (error) return console.error('Request failed:', error);
            else if (response.statusCode != 200)
                return console.error('Error:', response.statusCode, body.toString('utf8'));
            else console.log(body)
        }).then((response) => {
            if(response.data!=null)
            setData(response.data.dateNo);
        });


    }, [check])

    if (data) {
        data.map((element, index) => {
            console.log(element);
        })
    }


    return (
        <div className="row">


            { data && data.map((element)=>(
            <div className="food-item-card col-4">
                <DailyMealCard date={element.date} mealid={element.meal} />
            </div>))}

        </div>
    )
}
