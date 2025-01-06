
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Guests Say</h2>
        <div className=" flex ">
          {/* Testimonial Item */}
          <div className="flex flex-col items-center max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow-lg">
            <p className="text-lg font-medium text-gray-800">“The stay was amazing! The staff was so friendly and the amenities were top-notch.”</p>
            <h4 className="mt-4 text-xl font-semibold text-gray-700">John Doe</h4>
            <p className="text-sm text-gray-500">Rating: 5/5</p>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow-lg">
            <p className="text-lg font-medium text-gray-800">“A wonderful experience. I loved the breakfast and the pool!”</p>
            <h4 className="mt-4 text-xl font-semibold text-gray-700">Jane Smith</h4>
            <p className="text-sm text-gray-500">Rating: 4/5</p>
          </div>

          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
