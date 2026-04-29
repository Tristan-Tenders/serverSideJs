const Course = require("../models/courseModel");

const getAllCourses = () => Course.find();

const getCourseById = (id) => Course.findById(id);

const createCourse = (data) => Course.create(data);

const updateCourse = (id, data) =>
  Course.findByIdAndUpdate(id, data, { new: true, runValidators: true });

const deleteCourse = (id) => Course.findByIdAndDelete(id);

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
