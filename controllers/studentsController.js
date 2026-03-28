const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require("../services/studentsService");

const getAll = (req, res) => {
  res.status(200).json(getAllStudents());
};

const getOne = (req, res) => {
  const student = getStudentById(parseInt(req.params.id));
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.status(200).json(student);
};

const create = (req, res) => {
  const { name, email, major, gpa } = req.body;
  if (!name || !email || !major || gpa === undefined) {
    return res.status(400).json({ error: "All fields are required: name, email, major, gpa" });
  }
  res.status(201).json(createStudent({ name, email, major, gpa }));
};

const update = (req, res) => {
  const { name, email, major, gpa } = req.body;
  if (!name || !email || !major || gpa === undefined) {
    return res.status(400).json({ error: "All fields are required: name, email, major, gpa" });
  }
  const student = updateStudent(parseInt(req.params.id), { name, email, major, gpa });
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.status(200).json(student);
};

const remove = (req, res) => {
  const student = deleteStudent(parseInt(req.params.id));
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.status(200).json(student);
};

module.exports = { getAll, getOne, create, update, remove };
