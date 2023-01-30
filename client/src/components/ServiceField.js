const ServiceField = ({ image, heading, description }) => {
    return (
        <div className="service-field">
            {image}
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>
    );
}

export default ServiceField;