#!/usr/bin/env node

"use strict"

var XMLObjectifier = require('./saXMLUtils')

const xmlToJson = function(xml){

  if (typeof xml === 'string') {
      xml = XMLObjectifier.textToXML(xml) //Converts xml string to xml dom
  }

  return XMLObjectifier.xmlToJSON(xml) //Converts xml dom object to JSON
}

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(data){

  process.stdout.write(JSON.stringify(xmlToJson(data), null, 2))

})