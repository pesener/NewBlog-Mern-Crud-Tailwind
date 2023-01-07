import axios from "axios";
import React from "react";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

export const login = async (formData) => HTTP.post("/home/signin", formData);

export const createPost = async (postForm) =>
  await HTTP.post("/home/newNote", postForm);

export const getPost = async () => HTTP.get("/home/newNote");

export const deletePost = async (id) => await HTTP.delete("/home/delete/" + id);
