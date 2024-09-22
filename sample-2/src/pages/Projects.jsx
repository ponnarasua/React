const Projects = () => {
  const projectlist = [
    {
      title: "PowerBot (SIH 2023)",
      description: "A Chatbot that can help Power Substations for their maintenance and monitoring.",
      link: "https://github.com/ponnarasua/PowerBot-"
    },
    {
      title: "React Developments",
      description: "I have developed many websites with React & Mern Stack Websites as a Hobby.",
      link: "https://github.com/ponnarasua/React"
    },
    {
      title: "Web Developments",
      description: "I have developed many websites with basics HTML, CSS, JS as a Hobby.",
      link: "https://github.com/ponnarasua/Web-development"
    }
    
  ]
  return (
    <>
      <div className="mt-4 mx-4 flex">
        <ul className="list-none flex flex-row justify-center gap-0">
          {projectlist.map((item, index) => {
            return (
              <li key={index}>
                <div className="my-2 mx-3 w-[89%] h-[90%] flex flex-col shadow-2xl rounded-2xl hover:bg-slate-800  hover:text-white">
                    <div className="flex flex-col justify-between px-4 py-6 text-center">
                      <div>
                        <p className="block mb-4 text-2xl font-black leading-tight hover:cursor-default ">{item.title}</p>
                        <p className="mb-4 text-justify hover:cursor-default">{item.description}</p>
                      </div>
                      <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                          className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase hover:text-white">Read More -&gt;</a>
                      </div>
                    </div>
                  </div>
              </li>
            )
          })}
        </ul>
      </div>

    </>
  )
}

export default Projects