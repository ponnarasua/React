import Profilex from "../assets/profile.png";
const Profile = () => {
  return (
    <>
      <div className="App">
        <div className="w-full py-5 -z-10 bg-gradient-to-r from-neutral-700 to-neutral-950 text-white inline-flex flex-row justify-self-center place-items-center rounded-b-3xl sticky">
          <div className="w-7/12 h-4/6 flex flex-row justify-center items-start">
            <img
              src={Profilex}
              alt="Profile photo"
              className=" h-32 w-32 rounded-full justify-center align-middle"
            />
          </div>
          <div className="w-7/12 flex flex-col justify-center items-start font-semibold">
            <h1 className="text-lg font-extrabold ">Ponnarasu A</h1>
            <a href="mailto:pponnarasua410@gmail.com">
              <p className="underline">ponnarasua410@gmail.com</p>
            </a>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start m-5p">
          <h1 className=" text-2xl font-bold text-neutral-700 py-3">About Me</h1>
          <p className="text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;I am a Full Stack Developer with 2 years of
            experience in developing web applications. I have a strong knowledge
            of HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and
            MySQL. I have developed many web applications using these
            technologies. I am a quick learner and a team player. I am looking
            for a challenging role in a reputable organization to utilize my
            technical, database, and management skills for the growth of the
            organization as well as to enhance my knowledge about new and
            emerging trends in the IT sector.
          </p>
        </div>
        <div class="flex flex-col justify-center items-start m-5p">
          <h1 class="text-2xl font-bold text-neutral-700 py-3">Education</h1>
          <table class="w-full border border-neutral-700 border-collapse text-center">
            <tr>
              <th>Qualification</th>
              <th>Year</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>SSLC</td>
              <td>2020</td>
              <td>68.4%</td>
            </tr>
            <tr>
              <td>HSC</td>
              <td>2022</td>
              <td>77.33%</td>
            </tr>
            <tr>
              <td>B.Tech-Information Technology</td>
              <td>2026</td>
              <td>Currently pursuing</td>
            </tr>
          </table>
        </div>
        <div class="flex flex-col items-start m-5p">
          <h1 class="text-2xl font-bold text-neutral-700 py-3">Skills</h1>
          <ol className="list-disc text-justify px-10">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ol>
        </div>
        <div className="flex flex-col items-start m-5p">
          <h1 className="text-2xl font-bold text-neutral-700 py-3">
            Internships
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Company Name :</b>Shadow Fox &nbsp;&nbsp;
            <b>Role :</b> Java Developer
          </p>
        </div>
        <div class="section6">
          <a href="tel:+917339519364">
            <div id="Phone" class="child child-4">
              <button class="button btn-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  viewBox="0 0 32 32"
                  height="32"
                  fill="#00ff00"
                >
                  <path
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke="#fff"
                    fill-rule="evenodd"
                    d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
          <a href="mailto:ponnarasua410@gmail.com">
            <div id="gmail" class="child child-2">
              <button class="button btn-1">
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  fill="#Ff0000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:fill-[#ff0000] duration-300"
                    d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ponnarasu-a-98135125b/">
            <div id="linkedin" class="child child-1">
              <button class="button btn-1">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  fill="#1e90ff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </button>
            </div>
          </a>
          <a href="https://github.com/ponnarasua">
            <div class="child child-3">
              <button class="button btn-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
        <div className="m-5 mb-10 mx-[40%] flex flex-row justify-center items-center">
          <a href="https://drive.google.com/file/d/1B8i26XpqGjskvA5O4CT9ilndTldKv1-f/view?usp=drive_link=download" target="_blank">
            <button className="mb-2 cursor-pointer flex justify-around bg-neutral-700 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-neutral-0 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 animate-bounce">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3">
                </path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Profile;
