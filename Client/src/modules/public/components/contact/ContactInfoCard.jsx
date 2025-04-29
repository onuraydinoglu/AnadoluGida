import Subtitle from "../../../../shared/components/Subtitle";

import workingHours from "../../../../shared/data/workingHours";

const ContactInfoCard = () => {
  return (
    <div>
      <Subtitle>Kontaktinformationen</Subtitle>
      <div className="mb-5">
        <p className="mb-2">Address: Kaiserstraße 68, 24143 Kiel, Germany</p>
        <p className="">Telephone: +49 173 2461008</p>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 tracking-wide">
          <Subtitle>Öffnungszeiten</Subtitle>
        </li>

        {workingHours.map((workingDay) => (
          <div className="grid grid-cols-3">
            <li key={workingDay.id} className="list-row">
              <div>
                <p>{workingDay.day}</p>
              </div>
              <div>
                <p>
                  {workingDay.open}–{workingDay.close}
                </p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoCard;
