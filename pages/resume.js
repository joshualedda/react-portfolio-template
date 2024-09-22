import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Return null while waiting for the theme to mount

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <a
            target="_blank"
            href="/pdf/Joshua_Ledda_CV.pdf"
            download="Joshua_Ledda_CV.pdf"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Download Resume
          </a>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        {/* Navbar */}
        <Header isBlog />

        {mounted && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div></div>

            <div
              className={`w-full ${
                theme === "dark" ? "bg-slate-800" : "bg-gray-100"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <ul className="list-disc list-inside">
                    {resume.education.universityPara
                      .split(",")
                      .map((item, index) => (
                        <li key={index} className="text-sm mt-2 opacity-70">
                          {item.trim()}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* Trainings */}
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Trainings</h1>
                {resume.training.map((training, index) => (
                  <div key={index} className="mt-2">
                    <h2 className="text-lg mt-3">{training.companyName}</h2>
                    
                    <h3 className="text-sm opacity-75">
                      {training.trainingDate}
                    </h3>

                    <ul className="list-disc list-inside">
                      {training.activities.split("|").map((item, idx) => (
                        <li key={idx} className="text-sm mt-2 opacity-70">
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Awards</h1>
                {resume.award.map((award, index) => (
                  <div key={index} className="mt-2">
                    <h2 className="text-lg mt-3">{award.awardName}</h2>
                    <div className="mt-2">
                      {award.description.split("|").map((item, idx) => (
                        <div
                          key={idx}
                          className="text-sm mt-2 opacity-70 flex items-start"
                        >
                          <span className="mr-2 text-gray-600">-</span>
                          <span>{item.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6">
                  {resume.languages && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Languages</h2>
                      <ul className="list-disc pl-5">
                        {resume.languages.map((language, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.webDesign && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Web Design</h2>
                      <ul className="list-disc pl-5">
                        {resume.webDesign.map((design, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {design}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Frameworks</h2>
                      <ul className="list-disc pl-5">
                        {resume.frameworks.map((framework, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.libraries && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Libraries</h2>
                      <ul className="list-disc pl-5">
                        {resume.libraries.map((library, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {library}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.database && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Database</h2>
                      <ul className="list-disc pl-5">
                        {resume.database.map((db, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {db}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.deployment && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Deployment</h2>
                      <ul className="list-disc pl-5">
                        {resume.deployment.map((deploy, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {deploy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.codeVersion && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Code Version</h2>
                      <ul className="list-disc pl-5">
                        {resume.codeVersion.map((version, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {version}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Others</h2>
                      <ul className="list-disc pl-5">
                        {resume.others.map((other, index) => (
                          <li
                            key={index}
                            className={`py-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Project List */}
                <div className="mt-5">
                  <div className="mt-5">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    {resume.project.map((project, index) => (
                      <div key={index} className="">
                       <a
                    target="_blank"
                    rel="noopener noreferrer" 
                    href={project.link}
                    className="text-blue-500 hover:underline"
                  >
                          <h2 className="text-lg mt-3">
                            {project.projectName}
                          </h2>
                        </a>
                        <div className="mt-2">
                          {project.projectDescription
                            .split("|")
                            .map((item, idx) => (
                              <div
                                key={idx}
                                className="text-sm mt-2 opacity-70 flex items-start"
                              >
                                <span className="mr-2 text-gray-600">-</span>
                                <span>{item.trim()}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
