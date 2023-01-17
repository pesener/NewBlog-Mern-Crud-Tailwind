import axios from "axios";
import React from "react";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});
///USER///
export const login = async (formData) => HTTP.post("/home/admin", formData);

export const register = async (formData) => HTTP.post("/home/signup", formData);

///POST///

export const createPost = async (postForm) =>
  await HTTP.post("/home/newNote", postForm);

export const getPosts = async () => await HTTP.get("/home/newNote");

export const getPost = async (id) => await HTTP.get("/home/newNote" + id);

export const deletePost = async (id) => await HTTP.delete("/home/delete/" + id);

export const updatePost = async (id, updatedPost) =>
  await HTTP.put("/home/update/" + id, updatedPost);
