# Sofa

Sofa is a Ruby wrapper around the CouchDB REST API.

It doesn't provide a lot of bells and whistles, but aims to be as close to the
original API as possible, while taking advantage of Ruby's expressive power.

Most ideas for this have been gathered while trying other libraries such as
CouchObject, CouchRest, and RelaxDB.

It does so with almost[1] no modification of ruby libraries and makes it simple
to switch the HTTP library used by changing one method.
Eventually Sofa will be using an evented http library to provide better
performance.

[1]: We are using NotNaughty for validation, which does add the #blank? method.

## Dependencies

* CouchDB - 0.9 trunk
* rest-client
* not_naughty
* rack
* json

## Features

* Simple Models, the CouchDB way and without magic.
* Free choice of inheritance, just include the Sofa::Model module.
* Smart interpretation of returned JSON.
* Direct mapping of javascript files to map/reduce functions for views.
* CouchDB specific error reporting, no meaningless HTTP status code.
* Live update of views during runtime.
* Easy configuration, possibility to use different servers and databases each
  model.

## Usage

See the /example/blog.rb
