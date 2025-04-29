import Subtitle from "../../../../shared/components/Subtitle";

import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";

const ContactCard = () => {
  return (
    <div>
      <Subtitle>Kontaktformular</Subtitle>
      <div className="grid grid-cols-2 gap-6">
        <label className="input w-full">
          <LuUser />
          <input type="input" required placeholder="Username" />
        </label>

        <label className="input w-full">
          <LuUser />
          <input type="input" required placeholder="Last Name" />
        </label>

        <label className="input w-full ">
          <CiMail />
          <input type="email" placeholder="mail@site.com" required />
        </label>

        <label className="input w-full">
          <MdOutlinePhoneIphone />
          <input type="tel" className="tabular-nums" required placeholder="Phone" />
        </label>

        <textarea className="textarea w-full col-span-2 h-40" placeholder="Bio"></textarea>
        <button className="btn btn-primary col-span-2">Absenden</button>
      </div>
    </div>
  );
};

export default ContactCard;
