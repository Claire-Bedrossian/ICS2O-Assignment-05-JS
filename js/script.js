// Copyright (c) 2023 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-JS/sw.js", {
    scope: "/ICS2O-Assignment-05-JS/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  var numM = parseFloat(document.getElementById("num-m").value)
  var numX = parseFloat(document.getElementById("num-x").value)
  var numB = parseFloat(document.getElementById("num-b").value)

  var product = numB
  var counter = 0

  while (counter < Math.abs(numX)) {
    counter++
    product = product + Math.abs(numM)
    document.getElementById("x-values").innerHTML += " x = " + counter + "</br>"
    document.getElementById("y-values").innerHTML += " y = " + product + "</br>"
}
}
