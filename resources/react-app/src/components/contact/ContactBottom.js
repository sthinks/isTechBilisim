import React from "react";
import ContactData from "./ContactData";


function ContactBottom() {

    return (
        <div className="h-3/5 w-3/4  flex flex-row  border-2 border-[#dbdbdb] justify-between contact-bottom max-md:flex-col max-md:h-full max-lg:flex-col  ">
            <div className="flex-1 flex justify-center items-center">
                <ContactData />
            </div>
            <div className="flex-1">
                <iframe
                    className="w-full h-full"
                    title="adress"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12044.362627851693!2d28.6877801!3d41.0013889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1d57ce4e233%3A0x9d499efc67d1c09a!2zQWt0aW0gMyBBdmPEsWxhciAtIEFrxLFsbMSxIFRpY2FyZXQgdmUgxLDFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1683726837994!5m2!1str!2str"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactBottom;
