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

export const getPost = async (id) => await HTTP.get("/home/newNote/" + id);

export const deletePost = async (id) => await HTTP.delete("/home/delete/" + id);

export const updatePost = async (id, updatedPost) =>
  await HTTP.put("/home/update/" + id, updatedPost);

///COMMENT////
export const createComment = async (commentForm) =>
  await HTTP.post("/home/comment", commentForm);

export const getComments = async () => await HTTP.get("/home/comment");

export const deleteComments = async (id) =>
  await HTTP.delete("/home/delete/comment/" + id);

export const updatePub = async (publishedObj) =>
  HTTP.put("/home/put/published", publishedObj);

export const getPubPost = async () => HTTP.get("/home/comment/pub");

export const getComment = async (id) => await HTTP.get("/home/comment/" + id);
