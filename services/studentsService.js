let students = require("../students.json");

const getAllStudents = () => students;

const getStudentById = (id) => students.find((s) => s.id === id);

const nextId = () =>
  students.length === 0 ? 1 : Math.max(...students.map((s) => s.id)) + 1;

const createStudent = ({ name, email, major, gpa }) => {
  const newStudent = { id: nextId(), name, email, major, gpa };
  students.push(newStudent);
  return newStudent;
};

const updateStudent = (id, { name, email, major, gpa }) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  students[index] = { id, name, email, major, gpa };
  return students[index];
};

const deleteStudent = (id) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  return students.splice(index, 1)[0];
};

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };
