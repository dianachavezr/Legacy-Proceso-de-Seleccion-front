import React from "react";
import "./whatsAppButton.css"


const WhatsAppButton = () => {
    return(
        <div className="Whatsapp_Button">
           
            <a href="https://api.whatsapp.com/send?phone=573114508935&text=Hola!%20Tengo%20una%20duda%20sobre%20" target="_blank"> <i className="fab fa-whatsapp"/></a>
        </div>
    )
}
export default WhatsAppButton;