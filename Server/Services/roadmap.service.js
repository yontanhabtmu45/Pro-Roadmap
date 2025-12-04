// Import the query function from the db.config.js file
const conn = require("../config/db.config");

// A function to check if roadmap exists in the database
async function checkIfRoadmapExists(roadmap_title) {
  const query = "SELECT * FROM roadmaps WHERE title = ? ";
  const rows = await conn.executeQuery(query, [roadmap_title]);
//   console.log(rows);
    if (rows.length > 0) {
        return true;
    }
    return false;
}

// A function to create a new roadmap
async function createRoadmap(roadmapData) {
    const { title, description } = roadmapData;
    // Check if roadmap already exists
    const roadmapExists = await checkIfRoadmapExists(title);
    if (roadmapExists) {
        throw new Error("Roadmap with this title already exists");
    }
    // Insert the new roadmap into the database
    const query =
      "INSERT INTO roadmaps (title, description) VALUES (?, ?)";
    const result = await conn.executeQuery(query, [
      title,
      description,
    ]);
    return result;
}
// A function to get all roadmaps 
async function getAllRoadmaps() {
    const query = "SELECT * FROM roadmaps";
    const result = await conn.executeQuery(query)
    return result;
}

// A function to get roadmap by id
async function getRoadmap(roadmap_id) {
    const query = "SELECT * FROM roadmaps WHERE roadmap_id = ?";
    const result = await conn.executeQuery(query, [roadmap_id])
    return result;
}

// A function to delete roadmap by id
async function deleteRoadmap(roadmap_id) {
    const query = "DELETE FROM roadmaps WHERE roadmap_id = ? ";
    const result = await conn.executeQuery(query, [roadmap_id]);
    return result;
}

//  A function to update roadmap details
async function updateRoadmap(roadmap_id, roadmapData) {
    const { title, description } = roadmapData;  
    const query = "UPDATE roadmaps SET title = ?, description = ? WHERE roadmap_id = ? ";
    const result = await conn.executeQuery(query, [title, description, roadmap_id]);
    return result;
}

// Export the functions
module.exports = {
    createRoadmap,
    checkIfRoadmapExists,
    getAllRoadmaps,
    getRoadmap,
    deleteRoadmap,
    updateRoadmap
};