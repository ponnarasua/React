import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { CircleX, Pencil, Trash2 } from "lucide-react";

const ProjectControl = () => {
  const url = import.meta.env.VITE_PROJECT_API;
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const linkRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    link: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc || !formData.link) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        toast.success("Project Added successfully!");
        setFormData({
          title: "",
          desc: "",
          link: ""
        });
        setVisible(false);
        fetchProjects(); // Fetch projects again to update the list
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the project.");
    }
  };

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("An error occurred while fetching projects.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = async (id) => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setFormData({
        title: project.title,
        desc: project.desc,
        link: project.link
      });
      setVisible(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setProjects(projects.filter((project) => project.id !== id));
      toast.success("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("An error occurred while deleting the project.");
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
        <ul className="list-none flex flex-row justify-center gap-0">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="m-[5%] w-[89%] h-[90%] flex flex-col shadow-2xl rounded-2xl hover:bg-zinc-800 hover:text-white">
                <div className="flex flex-col justify-between p-[10%] text-center">
                  <div>
                    <p className="block mb-4 text-2xl font-black leading-tight hover:cursor-default">
                      {project.title}
                    </p>
                    <p className="mb-4 text-justify hover:cursor-default">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap justify-between my-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="group relative">
                        <button>
                          <svg
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </button>
                        <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-neutral-700 bg-neutral-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                          GitHub
                        </span>
                      </div>
                    </a>
                    <div class="group relative">
                      <button onClick={() => handleEdit(project.id)} >
                        <svg className="w-8 hover:scale-125 duration-200 hover:stroke-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <span class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-neutral-700 bg-neutral-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Edit<span>
                      </span></span></div>
                    <div class="group relative">
                      <button onClick={() => handleDelete(project.id)}>
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="w-8 hover:scale-125 duration-200 hover:stroke-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>
                      <span class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-neutral-700 bg-neutral-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Delete<span>
                        </span></span></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Toaster />
        <div className="z-20">
          <button
            className="w-[6%] h-[6%] m-3 bg-neutral-700 text-white rounded-lg hover:neutral-700 transition duration-300 fixed bottom-5 right-0 text-3xl"
            onClick={() => setVisible(true)}
          >
            +
          </button>
        </div>
        {visible && (
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50 ">
            <div className=" h-[40%] w-[45%] rounded-2xl bg-red z-50 flex flex-col  bg-white  shadow-lg">
              <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-black bg-white text-xl font-bold shadow-sm rounded-2xl">
                <div className="w-1/2">Add Project</div>
                <div className="w-1/2 flex justify-end">
                  <CircleX
                    className="cursor-pointer h-6 w-6 text-neutral-700 rounded-3xl border-2 border-neutral-700 hover:bg-neutral-700 hover:text-white hover:border-neutral-700 transition duration-300"
                    onClick={() => setVisible(false)}
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    className="w-[70%] p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                    placeholder="Enter Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    ref={titleRef}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-[70%] p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                    placeholder="Enter Description"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    ref={descRef}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-[70%] p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                    placeholder="Enter Link"
                    name="link"
                    type="url"
                    value={formData.link}
                    onChange={handleChange}
                    ref={linkRef}
                  />
                </div>
                <button
                  className="w-[70%] bg-neutral-700 text-white p-2 rounded-lg hover:bg-neutral-800 transition duration-300"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectControl;