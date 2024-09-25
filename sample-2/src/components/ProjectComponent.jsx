import { useEffect, useState } from "react"
import { getProjects } from "../services/api"
import AddComponent from "../components/AddComponent"
import { toast, Toaster } from "sonner"
import ProjectCard from "./ProjectCard"
import { MessageCircleWarning } from "lucide-react"

const ProjectComponents = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
      toast('Error', {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      });
    }
  }
  console.log(projectdata)


  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata || projectdata.length === 0) {
    return (
      <div className="w-full h-[10%] flex justify-center items-center">
        <AddComponent />
      </div>
    )
  }
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-end items-center px-10">
          <AddComponent fetchprojects={fetchprojects} />
        </div>

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} link={data.link} fetchprojects={fetchprojects} />
          ))
        }
      </div >

      <Toaster richColors />
    </>
  )
}

export default ProjectComponents