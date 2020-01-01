exports.makeNotRequiredDate = req => {
  let dueDate;
  if (req.body.dueYear !== undefined) {
    let dueY = req.body.dueYear;
    let dueM = req.body.dueMonth;
    let dueD = req.body.dueDate;
    let dueHours = req.body.dueHours;
    let dueMinutes = req.body.dueMinutes;
    // Convert Date type values to UNIX number type (absolute time) with getTime()
    // but MongoDB converts it to ISO-8601 String type (absolute time) when creating DB Documents
    dueDate = new Date(dueY, dueM, dueD, dueHours, dueMinutes).getTime();
  } else dueDate = undefined;

  let doneAt;
  if (req.body.doneYear !== undefined) {
    let doneY = req.body.doneYear;
    let doneM = req.body.doneMonth;
    let doneD = req.body.doneDate;
    let doneHours = req.body.doneHours;
    let doneMinutes = req.body.doneMinutes;
    // Convert Date type values to UNIX number type (absolute time) with getTime()
    // but MongoDB converts it to ISO-8601 String type (absolute time) when creating DB Documents
    doneAt = new Date(doneY, doneM, doneD, doneHours, doneMinutes).getTime();
  } else doneAt = undefined;

  return { dueDate, doneAt };
};
