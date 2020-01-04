exports.makeNotRequiredDate = req =>
  new Promise(resolve => {
    let dueDate;
    if (req.body.dueDate !== undefined) {
      // Convert Date type values to UNIX number type (absolute time) with getTime()
      // but MongoDB converts it to ISO-8601 String type (absolute time) when creating DB Documents
      dueDate = new Date(req.body.dueDate).getTime();
    } else dueDate = undefined;

    let doneAt;
    if (req.body.doneAt !== undefined) {
      // Convert Date type values to UNIX number type (absolute time) with getTime()
      // but MongoDB converts it to ISO-8601 String type (absolute time) when creating DB Documents
      doneAt = new Date(req.body.doneAt).getTime();
    } else doneAt = undefined;

    resolve({ dueDate, doneAt });
  });
