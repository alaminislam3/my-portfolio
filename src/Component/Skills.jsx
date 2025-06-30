// src/components/Skills.jsx
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    {
      name: "MongoDB",
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "Express.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "React",
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
  ];

  return (
    <section id="skill" className="py-16 bg-[#d9cabf] ">
      <h2 className="text-3xl font-bold text-center md:pt-15 mb-10 text-neutral">Tech Stack</h2>

      <Marquee direction="right" speed={50} gradient={false}>
        <div className="flex gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 w-52 h-52 flex flex-col items-center justify-center border"
            >
              <img src={skill.img} alt={skill.name} className="h-20 object-contain" />
              <p className="mt-4 font-semibold text-black text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
