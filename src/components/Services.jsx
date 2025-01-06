
const Services = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Hotel Amenities & Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Amenity Item */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl mb-2 text-primary"><i className="fas fa-wifi"></i></span>
                        <h4 className="text-lg font-semibold">Free Wi-Fi</h4>
                        <p className="text-sm text-gray-500">Stay connected during your stay.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl mb-2 text-primary"><i className="fas fa-swimmer"></i></span>
                        <h4 className="text-lg font-semibold">Swimming Pool</h4>
                        <p className="text-sm text-gray-500">Relax and unwind in our pool.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl mb-2 text-primary"><i className="fas fa-spa"></i></span>
                        <h4 className="text-lg font-semibold">Spa & Wellness</h4>
                        <p className="text-sm text-gray-500">Enjoy premium spa services.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl mb-2 text-primary"><i className="fas fa-parking"></i></span>
                        <h4 className="text-lg font-semibold">Free Parking</h4>
                        <p className="text-sm text-gray-500">Parking available for all guests.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
