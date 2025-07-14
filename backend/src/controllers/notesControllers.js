export const getAllNotes = (req, res) => {
  res.status(200).send("You got 10 notes");
};

export const getSingleNote = (req, res) => {
  res.status(200).send("You got a notes");
};

export const createNotes = (req, res) => {
  res.status(201).send("You created a note");
};
export const updateNotes = (req, res) => {
  res.status(200).send("You updated a note");
};

export const deleteNotes = (req, res) => {
  res.status(200).send("You deleted a note");
};
