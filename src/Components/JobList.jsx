import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const jobListings = [
  { id: 1, title: "Product Designer", category: "Design" },
  { id: 2, title: "Engineering Manager", category: "Development" },
  { id: 3, title: "Customer Success Manager", category: "Customer Service" },
  { id: 4, title: "Account Executive", category: "Finance" },
  { id: 5, title: "SEO Marketing Manager", category: "Marketing" },
];

const categories = ["View all", "Development", "Design", "Marketing", "Customer Service", "Finance", "Management"];

const JobList = ()=> {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const filteredJobs = selectedCategory === "View all"
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory);

  const openPopup = (job) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      closePopup();
      navigate("/");
    }, 3000);
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 border rounded-full transition ${
              selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600">We&apos;re looking for a {job.title.toLowerCase()} to join our team.</p>
                <div className="mt-2 flex gap-3 flex-wrap">
                  <span className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
                    <IoLocationOutline /> 100% Remote
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
                    <IoMdTime /> Full-time
                  </span>
                </div>
              </div>
              <button onClick={() => openPopup(job)} className="text-black font-semibold flex items-center mt-2 md:mt-0">
                Apply <CgArrowTopRight className="ml-1" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg mt-6">No openings available.</p>
        )}
      </div>

      {/* Popup Form */}
      {isPopupOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500 hover:text-black">
              <IoClose size={24} />
            </button>
            {showThankYou ? (
              <h2 className="text-xl font-semibold text-center">Thanks for connecting with us!</h2>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium">Full Name</label>
                <input type="text" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Current City</label>
                <input type="text" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">State</label>
                <input type="text" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Resume (Upload)</label>
                <input type="file" className="w-full p-2 border rounded" required />
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded mt-3">Submit Application</button>
            </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default JobList;