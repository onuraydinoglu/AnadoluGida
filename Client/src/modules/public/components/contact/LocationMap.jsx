const LocationMap = () => {
  return (
    <div className="w-full h-96">
      <iframe
        src="https://maps.google.com/..."
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
