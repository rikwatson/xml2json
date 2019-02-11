#!/usr/bin/env node

"use strict"

var XMLObjectifier = require('./saXMLUtils')

const xmlToJson = function(xml){

  if (typeof xml === 'string') {
      xml = XMLObjectifier.textToXML(xml) //Converts xml string to xml dom
  }

  return XMLObjectifier.xmlToJSON(xml) //Converts xml dom object to JSON
}

let data = ""

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk

  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    data += chunk;
  }
})

process.stdin.on('end', () => {
  process.stdout.write(JSON.stringify(xmlToJson(data), null, 2))
})