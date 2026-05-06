[![Build Status](https://travis-ci.org/cloudinary/cloudinary_npm.svg?branch=master)](https://travis-ci.org/cloudinary/cloudinary_npm)

Cloudinary
==========

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.

For Node.js, Cloudinary provides an extension for simplifying the integration even further.

## Getting started guide
![](https://res.cloudinary.com/cloudinary/image/upload/see_more_bullet.png)  **Take a look at our [Getting started guide for Node.js](https://cloudinary.com/documentation/node_integration#node_js_getting_started_guide)**.


## Setup ######################################################################

``` npm install cloudinary ```

## Try it right away

Sign up for a [free account](https://cloudinary.com/users/register/free) so you can try out image transformations and seamless image delivery through CDN.

*Note: Replace `demo` in all the following examples with your Cloudinary's `cloud name`.*

Accessing an uploaded image with the `sample` public ID through a CDN:

    http://res.cloudinary.com/demo/image/upload/sample.jpg

![Sample](https://res.cloudinary.com/demo/image/upload/w_0.4/sample.jpg "Sample")

Generating a 150x100 version of the `sample` image and downloading it through a CDN:

    http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg

![Sample 150x100](https://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg "Sample 150x100")

Converting to a 150x100 PNG with rounded corners of 20 pixels:

    http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill,r_20/sample.png

![Sample 150x150 Rounded PNG](https://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill,r_20/sample.png "Sample 150x150 Rounded PNG")

For plenty more transformation options, see our [image transformations documentation](http://cloudinary.com/documentation/image_transformations).

Generating a 120x90 thumbnail based on automatic face detection of the Facebook profile picture of Bill Clinton:

    http://res.cloudinary.com/demo/image/facebook/c_thumb,g_face,h_90,w_120/billclinton.jpg

![Facebook 90x120](https://res.cloudinary.com/demo/image/facebook/c_thumb,g_face,h_90,w_120/billclinton.jpg "Facebook 90x200")

For more details, see our documentation for embedding [Facebook](https://cloudinary.com/documentation/facebook_profile_pictures) and [Twitter](https://cloudinary.com/documentation/twitter_profile_pictures) profile pictures.


## Usage

### Configuration

Each request for building a URL of a remote cloud resource must have the `cloud_name` parameter set.
Each request to our secure APIs (e.g., image uploads, eager sprite generation) must have the `api_key` and `api_secret` parameters set. See [API, URLs and access identifiers](https://cloudinary.com/documentation/solution_overview#account_and_api_setup) for more details.

Setting the `cloud_name`, `api_key` and `api_secret` parameters can be done either directly in each call to a Cloudinary method, by calling the cloudinary.config(), or by using the CLOUDINARY_URL environment variable.

### Require the Cloudinary library

```js
var cloudinary = require('cloudinary').v2
```

### Overriding the request agent
To override the request agent pass the agent into any method that makes a
request and it will be used instead of the normal https agent. e.g

```js
cloudinary.uploader.upload_stream(
  { agent: myAgent },
  function(error, result) { console.log(result); }
);

```

### Embedding and transforming images

Any image uploaded to Cloudinary can be transformed and embedded using powerful view helper methods:

The following example generates the url for accessing an uploaded `sample` image while transforming it to fill a 100x150 rectangle:

```js
cloudinary.url("sample.jpg", {width: 100, height: 150, crop: "fill"})
```

Another example, emedding a smaller version of an uploaded image while generating a 90x90 face detection based thumbnail:

```js
cloudinary.url("woman.jpg", {width: 90, height: 90, crop: "thumb", gravity: "face"});
```

You can provide either a Facebook name or a numeric ID of a Facebook profile or a fan page.

Embedding a Facebook profile to match your graphic design is very simple:

```js
cloudinary.url("billclinton.jpg", {width: 90, height: 130, type: "facebook", crop: "fill", gravity: "north_west"});
```

Same goes for Twitter:

```js
cloudinary.url("billclinton.jpg", {type: "twitter_name"});
```

![](https://res.cloudinary.com/cloudinary/image/upload/see_more_bullet.png) **See [our documentation](https://cloudinary.com/documentation/node_image_manipulation) for more information about displaying and transforming images in Node.js**.

### Upload

Assuming you have your Cloudinary configuration parameters defined (`cloud_name`, `api_key`, `api_secret`), uploading to Cloudinary is very simple.

The following example uploads a local JPG to the cloud:

```js
var cloudinary = require('cloudinary').v2;
cloudinary.uploader.upload("my_picture.jpg", function(error, result) { console.log(result) });
```

Below is an example of an upload's result:

```json
{
  "public_id": "4srvcynxrf5j87niqcx6w",
  "version": 1340625837,
  "signature": "01234567890abcdef01234567890abcdef012345",
  "width": 200,
  "height": 200,
  "format": "jpg",
  "resource_type": "image",
  "url": "http://res.cloudinary.com/demo/image/upload/v1340625837/4srvcynxrf5j87niqcx6w.jpg",
  "secure_url": "https://res.cloudinary.com/demo/image/upload/v1340625837/4srvcynxrf5j87niqcx6w.jpg"
}
```

The uploaded image is assigned a randomly generated public ID. The image is immediately available for download through a CDN:

```js
cloudinary.url("abcfrmo8zul1mafopawefg.jpg");

// http://res.cloudinary.com/demo/image/upload/abcfrmo8zul1mafopawefg.jpg
```
You can also specify your own public ID:

```js
cloudinary.uploader.upload(
  "http://www.example.com/image.jpg", 
  {public_id: 'sample_remote'}, 
  function(error, result) { 
    console.log(result) 
  }
);

cloudinary.url("sample_remote.jpg")

// http://res.cloudinary.com/demo/image/upload/sample_remote.jpg

```

![](https://res.cloudinary.com/cloudinary/image/upload/see_more_bullet.png) **See [our documentation](https://cloudinary.com/documentation/node_image_upload) for plenty more options of uploading to the cloud from your Node.js code or directly from the browser**.

### cloudinary.upload_stream

You can use cloudinary.upload_stream to write to the uploader as a stream:

```js
var fs = require('fs');
var stream = cloudinary.uploader.upload_stream(function(error, result) { console.log(result); });
var file_reader = fs.createReadStream('my_picture.jpg', {encoding: 'binary'}).on('data', stream.write).on('end', stream.end);
```

#### Version 1.1 upload_stream change notes
The `upload_stream` method was modified to return a `Transform` stream object, we advise to change the `on('data')` and `on('end')` to pipe API:

```js
var file_reader = fs.createReadStream('my_picture.jpg').pipe(stream);

```
if you still need to use event chanining, you can wrap `stream.write` and `stream.end` with wrapper functions

```js
var file_reader = fs.createReadStream('my_picture.jpg', {encoding: 'binary'})
  .on('data', function(data){stream.write(data)})
  .on('end', function(){stream.end()});
```
### cloudinary.image

Returns an html image tag pointing to Cloudinary.

Usage:

```js
cloudinary.image("sample", {format: "png", width: 100, height: 100, crop: "fill"})

// <img src='http://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample.png' height='100' width='100'/>
```

### Typescript

🎉New 🎉TypeScript support was just added. Check out the [declaration file](https://github.com/cloudinary/cloudinary_npm/blob/master/types/index.d.ts).  

### Samples

You can find our simple and ready-to-use samples projects, along with documentation in the [samples folder](https://github.com/cloudinary/cloudinary_npm/tree/master/samples).
Please consult with the [README file](https://github.com/cloudinary/cloudinary_npm/blob/master/samples/README.md), for usage and explanations.


## Additional resources ##########################################################

Additional resources are available at:

* [Website](https://cloudinary.com)
* [Interactive demo](https://demo.cloudinary.com/default)
* [Documentation](https://cloudinary.com/documentation)
* [Knowledge Base](https://support.cloudinary.com/hc/en-us)
* [Documentation for Node.js integration](https://cloudinary.com/documentation/node_integration)
* [Node.js image upload documentation](https://cloudinary.com/documentation/node_image_upload)
* [Node.js image manipulation documentation](https://cloudinary.com/documentation/node_image_manipulation)
* [Image transformations documentation](https://cloudinary.com/documentation/image_transformations)

## Run test

```
npm run test
```

## Node support
This SDK requires node >= 8.

## Support

You can [open an issue through GitHub](https://github.com/cloudinary/cloudinary_npm/issues).

Contact us [https://cloudinary.com/contact](https://cloudinary.com/contact)

Stay tuned for updates, tips and tutorials: [Blog](https://cloudinary.com/blog), [Twitter](https://twitter.com/cloudinary), [Facebook](https://www.facebook.com/Cloudinary).

## Join the Community ##########################################################

Impact the product, hear updates, test drive new features and more! Join [here](https://www.facebook.com/groups/CloudinaryCommunity).


## License #######################################################################

Released under the MIT license.

Test resources include the video [Cloud Book Study](https://vimeo.com/27172301)
which was created by [Heidi Neilson](https://vimeo.com/heidineilson)
and is distributed under the Creative commons - attribution license (CC BY 3.0)
