import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/portfolioData.js';

function Projects() {
  const [thumbnailUrls, setThumbnailUrls] = useState({});

  const getYouTubeThumbnailUrl = async (url) => {
    if (!url) return null;

    try {
      const urlObject = new URL(url);
      const videoId = urlObject.searchParams.get('v');
      if (!videoId) return null;

      const maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      const imageExists = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => {
            console.error("Image failed to load:", url);
            resolve(false);
          };
          img.src = url;
        });
      };

      const exists = await imageExists(maxResUrl);

      return exists ? maxResUrl : hqUrl;

    } catch (error) {
      console.error("Error getting YouTube thumbnail:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadThumbnails = async () => {
      const newThumbnailUrls = {};
      for (let i = 0; i < projectsData.length; i++) {
        const project = projectsData[i];
        if (project.liveDemo) {
          const thumbnailUrl = await getYouTubeThumbnailUrl(project.liveDemo);
          newThumbnailUrls[i] = thumbnailUrl;
        }
      }
      setThumbnailUrls(newThumbnailUrls);
    };

    loadThumbnails();
  }, [projectsData]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.date}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* YouTube Thumbnail */}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 relative"
                >
                  {thumbnailUrls[index] ? (
                    <>
                      <img
                        src={thumbnailUrls[index]}
                        alt={`${project.title} - YouTube Demo`}
                        className="rounded-md w-full transition-opacity duration-300"
                        style={{ maxWidth: '100%', height: 'auto', opacity: 1 }}
                      />
                      {/* Play Icon Overlay */}
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer opacity-60 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
                        style={{
                          zIndex: 10,
                          backgroundColor: 'rgba(0, 0, 0, 255.0)',
                          width: '15%',
                          height: '15%',
                          borderRadius: '5.0rem',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-play-circle-fill"
                          viewBox="0 0 16 16"
                          style={{ fontSize: '3em' }} // Reduced size here
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-36 bg-gray-700 rounded-md flex items-center justify-center text-gray-500">
                      Loading Thumbnail...
                    </div>
                  )}
                </a>
              )}

              {/* Image Section (if available) */}
              {project.image && !project.liveDemo && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-md"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              )}

              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors block"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;