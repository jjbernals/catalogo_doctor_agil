import React, {useEffect, useState} from 'react';
import logo from '../../assets/LOGO.png';
import axios from "axios";

const ServiceModal = ({ service, onClose }) => {
    const [doctors, setDoctors] = useState([]);
    const url = "http://localhost:8080/doctor/"+service.idCategory.id;
    useEffect(() => {
        axios.get(url).then((response)=>{
            setDoctors(response.data)
        })
    }, []);
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    {/* Aquí agregamos la imagen */}
                    <div className="p-4">
                        <img src={logo} alt={service.title} className="w-full h-auto rounded-t-lg object-cover object-center max-h-48" />
                    </div>

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.tittle}</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{service.description}</p>
                                    <p className="text-sm text-gray-500">Doctores disponibles:</p>
                                    {doctors.map((option) => (
                                        <p className="text-sm text-gray-500">{option.name}</p>
                                    ))}
                                    <p className="text-sm text-gray-500">Ubicación: {service.city}, {service.department}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ServiceModal;
