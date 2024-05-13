import React from "react";
import "../styles/PricingApp.css"
import PricingCard from "./utils/PricingCard";

function Planes () {
    return(
        <div className="PricingApp">
            <div className="app-container">

                {/* Cards here */}
                <div className="pricing-cards">
                    <PricingCard
                        title="Plan 1"
                        price="20.000"
                        storage="Atencion 24 horas"
                        users="2 Beneficiarios"
                        sendUp="+ 50 servicios incluidos"
                    />
                    <PricingCard
                        title="Plan 3"
                        price="80.000"
                        storage="Atencion 24 horas"
                        users="5 Beneficiarios"
                        sendUp="+ 50 servicios incluidos"
                    />
                    <PricingCard
                        title="Plan 2"
                        price="50.000"
                        storage="Atencion 24 horas"
                        users="3 Beneficiarios"
                        sendUp="+ 50 servicios incluidos"
                    />
                </div>
            </div>
        </div>
    )
}

export default Planes;