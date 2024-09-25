import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Projects = () => {
  const [projectlist, setProjectlist] = useState([]);
  useEffect(() => {
    axios.get('https://66e5273a5cc7f9b6273c6edc.mockapi.io/projec')
      .then(response => {
        setProjectlist(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the project data!', error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
        <ul className="list-none flex flex-row justify-center gap-0">
          {projectlist.map((item, index) => {
            return (
              <li key={index}>
                <div className="m-[5%] w-[89%] h-[90%] flex flex-col shadow-2xl rounded-2xl hover:bg-zinc-800  hover:text-white">
                  <div className="flex flex-col justify-between p-[10%] text-center">
                    <div>
                      <p className="block mb-4 text-2xl font-black leading-tight hover:cursor-default ">{item.title}</p>
                      <p className="mb-4 text-justify hover:cursor-default">{item.desc}</p>
                    </div>
                    <div className="">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div class="group relative">
                          <button>
                          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          </button>
                          <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                          z-20 origin-left scale-0 px-3 rounded-lg border 
                          border-neutral-700 bg-neutral-700 py-2 text-sm font-bold
                          shadow-md transition-all duration-300 ease-in-out 
                          group-hover:scale-100">GitHub<span>
                        </span></span></div></a>
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

export default Projects;