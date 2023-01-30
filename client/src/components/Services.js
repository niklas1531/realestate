import ServiceField from "./ServiceField";

const Services = () => {
    return (
        <div className="services">
            <div className="headings">
                <h2>Our service</h2>
                <p>When it comes to real estate and properties, we're very happy step of the way</p>
            </div>
            <div className="fields">
                <ServiceField
                    heading={'Property Insurance'}
                    description={'Property insurance provides protection against most risks to property, such as fire, threft...'}
                />
                <ServiceField 
                    heading={'Advantage'}
                    description={'All these properties have amazing prices, and you will find thousands of properties to chose form.'}
                />
                <ServiceField 
                    heading={'Low Commission'}
                    description={'We offer competitive commission structure that are straightforward and fair, making it simple and affordable'}
                />
            </div>
        </div>
    );
}

export default Services;