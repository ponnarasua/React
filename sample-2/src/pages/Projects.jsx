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
                <div className="m-[5%] w-[89%] h-[90%] flex flex-col shadow-2xl rounded-2xl hover:bg-slate-800  hover:text-white">
                  <div className="flex flex-col justify-between p-[10%] text-center">
                    <div>
                      <p className="block mb-4 text-2xl font-black leading-tight hover:cursor-default ">{item.title}</p>
                      <p className="mb-4 text-justify hover:cursor-default">{item.desc}</p>
                    </div>
                    <div className="">
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="inline-block text-base font-black text-blue-600 uppercase hover:text-white">Read More -&gt;</a>
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