import axios from "axios";
import { useState, useEffect } from 'react';

let JavaData = (props) => {
    const [empList, setEmpList] = useState([]); // from axios
    const [emp, setEmp] = useState(''); // from axios 
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
    // const url = `/Employee/`;
    // const url = `/getall/`;
    // const url      =`/eid/`;

    useEffect(() => {

        setParentEmp(props.parentEmp);
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );

        axios.get(`/getall/`)
            .then((response) => {
                setEmpList(response.data);
            })

        // axios.get(`${url}/103`)
        axios.get(`/getemp/106`)
            .then((response) => {
                setEmp(response.data);
            }
            )
            .catch((error)=>{
                console.log.apply(error);
            });
         
        
            axios.post(`/addemp`, {
                "eid": 109,
                "ename": "Shweta",
                "salary": 16.5
            })
                .then((response) => {
                    console.log(response.data);
                })


    }, []);

    const onTrigger = () => {
        props.parentCallback(childEmp);
    };

    return (
        <div>
            <p>JavaData Component</p>
            <p>axios {empList.map(e => <div>{e.ename}</div>)}</p>
            <p>axios {emp.ename}</p>
            <p>child {parentEmp.name}</p>
            <p> child {parentEmpHike} </p>
            <button onClick={onTrigger}>Pass child emp to parent</button>
        </div>
    )
}
export default JavaData;