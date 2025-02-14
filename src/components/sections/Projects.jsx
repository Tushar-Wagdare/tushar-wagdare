import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/portfolioData.js';

function Projects() {
  const [thumbnailUrls, setThumbnailUrls] = useState({}); // { [index]: url }

  const getYouTubeThumbnailUrl = async (url) => { // Mark as async
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
          img.onerror = () => resolve(false);
          img.src = url;
        });
      };

      const exists = await imageExists(maxResUrl); // Await the Promise

      return exists ? maxResUrl : hqUrl; // Return the correct URL

    } catch (error) {
      console.error("Error getting YouTube thumbnail:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadThumbnails = async () => { // Create an async function
      const newThumbnailUrls = {}; // Accumulate results
      for (let i = 0; i < projectsData.length; i++) {
        const project = projectsData[i];
        if (project.liveDemo) {
          const thumbnailUrl = await getYouTubeThumbnailUrl(project.liveDemo); // Await the result
          newThumbnailUrls[i] = thumbnailUrl;
        }
      }
      setThumbnailUrls(newThumbnailUrls); // Update state *after* all are fetched
    };

    loadThumbnails(); // Call the async function
  }, [projectsData]); // Re-run if projectsData changes

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
                  className="block mb-4"
                >
                  {/* Show placeholder or loading if thumbnail is not yet loaded */}
                  {thumbnailUrls[index] ? (
                    <img
                      src={thumbnailUrls[index]}
                      alt={`${project.title} - YouTube Demo`}
                      className="rounded-md w-full"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
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