// Import step service
const stepService = require("../Services/setps.service");
// A controller to set steps for a roadmap
async function setSteps(req, res, next) {
  // check if steps is provided in the request body
  const { steps } = req.body;
    if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return res
      .status(400)
      .json({ error: "Steps must be a non-empty array" });
  }
  // validate each step object
  for (const step of steps) {
    if (typeof step.step_order !== "number" || step.step_order < 1) {
      return res
        .status(400)
        .json({
          error: "Each step must have a valid step_order (positive number)",
        });
    }
  }

  try {
    const { step_id, steps } = req.body;
    const result = await stepService.setSteps(step_id, steps);
    return res
      .status(200)
      .json({ status: "success", message: "Steps set successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// A controller to get steps for a roadmap
async function getSteps(req, res, next) {
  try {
    const { step_id, roadmap_id } = req.params;
    const steps = await stepService.getSteps(step_id, roadmap_id);
    return res.status(200).json({ status: "success", data: steps });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// A controller to delete steps for a roadmap
async function deleteSteps(req, res, next) {
  try {
    const { step_id } = req.params;
    const result = await stepService.deleteSteps(step_id);
    return res
      .status(200)
      .json({ status: "success", message: "Steps deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// A controller to update steps for a roadmap
async function updateSteps(req, res, next) {
  try {
    const { step_id } = req.params;
    const result = await stepService.updateSteps(step_id);
    return res
      .status(200)
      .json({ status: "success", message: "Steps updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export the controllers
module.exports = {
  setSteps,
  getSteps,
  deleteSteps,
  updateSteps,
};
