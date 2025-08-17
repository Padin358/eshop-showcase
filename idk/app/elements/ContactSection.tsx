import { contacts } from "~/data"
import { MapPin, PhoneCall, Mail, IdCard } from "lucide-react"

const ContactSection = () => {
  return <div className="">
    <div className="flex flex-row flex-wrap justify-evenly">
      <div className="">
        <p className="text-3xl text-primary font-bold flex gap-5 items-center"><MapPin className="scale-150" /> Adresa</p>
        <p className="text-text mt-4 text-lg font-semibold">{contacts.address}</p>
      </div>
      <div className="">
        <p className="text-3xl text-primary font-bold flex gap-5 items-center"><IdCard className="scale-150" /> Kontakt</p>
        <p className="text-text my-4 text-lg font-semibold flex gap-3 items-center"><Mail className="scale-130"/> <div className="">Email: {contacts.email}</div></p>
        <p className="text-text my-4 text-lg font-semibold flex gap-3 items-center"><PhoneCall className="scale-130"/> <div className="">Tel.: {contacts.phone}</div></p>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5125.5814436751!2d14.454512783606232!3d50.03401717490478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93e6399f8641%3A0x30c33bfa8a9cfe6a!2sRestaurace%20a%20penzion%20U%20Labut%C4%9B!5e0!3m2!1scs!2scz!4v1755386903949!5m2!1scs!2scz" className="h-64 w-2/3 my-16 mx-auto rounded-2xl" loading="lazy"></iframe>
  </div>
}

export default ContactSection