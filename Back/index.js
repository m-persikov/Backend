const express = require("express");
const jsonServer = require("json-server");
const db = require("./db.json");

const server = jsonServer.create();
const router = jsonServer.router(db, { foreginKeySuffix: "id" });
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    "/registration": "/users",
  })
);

server.post("/registration", function (req, res, next) {
  req.body.id = Math.random();
  res.cookie("doggee-auth", "123456", {
    httpOnly: true,
    sameStie: "strict",
  });
  next();
});

server.use(express.json());
server.use(middlewares);
server.use(router);
