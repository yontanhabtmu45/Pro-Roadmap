// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// A function to set steps for a roadmap
async function setSteps(step_id, steps) {
  // First, delete existing steps for the roadmap
  const deleteQuery = "DELETE FROM roadmap_steps WHERE step_id = ? ";
  await conn.executeQuery(deleteQuery, [step_id]);
  // Insert new steps
  const insertQuery =
    "INSERT INTO roadmap_steps (roadmap_id, step_order, step_description, step_order) VALUES (?, ?, ?, ?)";
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    await conn.executeQuery(insertQuery, [
      roadmap_id,
      step.step_order,
      step.step_description,
      step.step_order,
    ]);
  }
  return true;
}

// A function to get steps for a roadmap
async function getSteps(step_id, roadmap_id) {
  const roadmap = await conn.executeQuery(
    "SELECT * FROM roadmap_steps WHERE step_id = ?, roadmap_id = ? ORDER BY step_number ASC",
    [step_id, roadmap_id]
  );
  return roadmap;
}

//  A function to delete steps for a roadmap
async function deleteSteps(step_id) {
  const deleteQuery = "DELETE FROM roadmap_steps WHERE step_id = ? ";
  await conn.executeQuery(deleteQuery, [step_id]);
  return true;
}

// A function to update steps for a roadmap
async function updateSteps(step_id) {
    const updateQuery = "UPDATE roadmap_steps SET step_id = ? ";
    await conn.executeQuery(updateQuery, [step_id]);
    return true;
}

// Export the functions
module.exports = {
  setSteps,
  getSteps,
  deleteSteps,
  updateSteps
};
