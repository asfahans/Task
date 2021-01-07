/* 1. Upload files using Cloudinary */ // ~asfahan

const cloudinary = require('cloudinary').v2;

const image =
  'https://autojournalism.com/wp-content/uploads/2020/12/vlcsnap-2020-12-01-10h49m48s817-e1606806857177-1068x601.png';

cloudinary.config({
  cloud_name: 'asfahan',
  api_key: '485365742757145',
  api_secret: 'wJyS-Jb6ygvc7CrOKijE0lo0j28',
});

cloudinary.uploader.upload(
  image,
  {
    public_id: 'icon-32X32',
    transformation: { width: 32, height: 32, crop: 'scale' }, // crop: 'fill' or 'pad'
  },
  function (err, result) {
    if (!err) {
      console.log('Result: ', result.url);
    } else {
      console.log('Error: ', err);
    }
  }
);

cloudinary.uploader.upload(
  image,
  {
    public_id: 'icon-150X150',
    transformation: { width: 150, height: 150, crop: 'scale' }, // crop: 'fill' or 'pad'
  },
  function (err, result) {
    if (!err) {
      console.log('Result: ', result.url);
    } else {
      console.log('Error: ', err);
    }
  }
);

cloudinary.uploader.upload(
  image,
  {
    public_id: 'icon-450X450',
    transformation: { width: 450, height: 450, crop: 'scale' }, // crop: 'fill' or 'pad'
  },
  function (err, result) {
    if (!err) {
      console.log('Result: ', result.url);
    } else {
      console.log('Error: ', err);
    }
  }
);

cloudinary.uploader.upload(
  image,
  {
    public_id: 'icon-800X800',
    transformation: { width: 800, height: 800, crop: 'scale' }, // crop: 'fill' or 'pad'
  },
  function (err, result) {
    if (!err) {
      console.log('Result: ', result.url);
    } else {
      console.log('Error: ', err);
    }
  }
);

/* 2. Save files in images folder after resizing */

// const Jimp = require('jimp');

// (async () => {
//   const image = await Jimp.read(
//     'https://autojournalism.com/wp-content/uploads/2020/12/vlcsnap-2020-12-01-10h49m48s817-e1606806857177-1068x601.png'
//   );

//   const fileExtension = image.getExtension();

//   /* image.resize(250, 250);        // resize the image to 250 x 250
//    image.resize(Jimp.AUTO, 250);  // resize the height to 250 and scale the width accordingly
//    image.resize(250, Jimp.AUTO);  // resize the width to 250 and scale the height accordingly */

//   image.resize(800, 800);
//   image.write(`images/large-800X800.${fileExtension}`);

//   image.resize(450, 450);
//   image.write(`images/medium-450X450.${fileExtension}`);

//   image.resize(150, 150);
//   image.write(`images/thumbnail-150X150.${fileExtension}`);

//   image.resize(32, 32);
//   image.write(`images/icon-32X32.${fileExtension}`);
// })();
