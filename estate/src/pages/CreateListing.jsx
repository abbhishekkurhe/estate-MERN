import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';

export default function CreateListing() {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
  });

  console.log("Form Data:", formData);

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      console.log("No files selected");
      return;
    }
    if (files.length > 6) {
      console.log("You can upload a maximum of 6 images.");
      return;
    }

    try {
      const uploadPromises = files.map((file) => storeImage(file));
      const urls = await Promise.all(uploadPromises);

      setFormData((prev) => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...urls],
      }));

      setFiles([]); // Clear file selection after upload
      console.log("Uploaded Image URLs:", urls);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = `${new Date().getTime()}-${file.name}`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  };

  return (
    <div className='min-h-screen bg-purple-800 flex justify-center items-center'>
      <main className='my-24 max-w-6xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-xl text-white'>
        <h1 className='text-5xl font-bold text-center my-8'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-8'>
          <div className='flex flex-col gap-6 flex-1'>
            <input
              type='text'
              placeholder='Name'
              className='border border-gray-700 p-4 rounded-lg focus:ring-4 focus:ring-yellow-400 text-black'
              id='name'
              maxLength='62'
              minLength='4'
              required
            />
            <textarea
              placeholder='Description'
              className='border border-gray-300 p-4 rounded-lg focus:ring-4 focus:ring-yellow-400 text-black'
              id='description'
              required
            />
            <input
              type='text'
              placeholder='Address'
              className='border border-gray-300 p-4 rounded-lg focus:ring-4 focus:ring-yellow-400 text-black'
              id='address'
              required
            />
            <div className='flex gap-6 flex-wrap'>
              {[
                { id: 'sale', label: 'Sell' },
                { id: 'rent', label: 'Rent' },
                { id: 'parking', label: 'Parking Spot' },
                { id: 'furnished', label: 'Furnished' },
                { id: 'offer', label: 'Offer' },
              ].map(({ id, label }) => (
                <div key={id} className='flex items-center gap-2 bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-yellow-300 transition text-black'>
                  <input type='checkbox' id={id} className='w-5 h-5 accent-yellow-500' />
                  <span className='font-medium'>{label}</span>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap gap-6'>
              {[{ id: 'bedrooms', label: 'Beds' }, { id: 'bathrooms', label: 'Baths' }].map(({ id, label }) => (
                <div key={id} className='flex items-center gap-2 bg-gray-200 p-4 rounded-lg text-black'>
                  <input
                    type='number'
                    id={id}
                    min='1'
                    max='10'
                    required
                    className='p-3 border border-gray-300 rounded-lg w-16 text-center focus:ring-4 focus:ring-yellow-400'
                  />
                  <p className='font-medium'>{label}</p>
                </div>
              ))}
              {[{ id: 'regularPrice', label: 'Regular Price' }, { id: 'discountPrice', label: 'Discounted Price' }].map(({ id, label }) => (
                <div key={id} className='flex items-center gap-2 bg-gray-200 p-4 rounded-lg text-black'>
                  <input
                    type='number'
                    id={id}
                    min='1'
                    max='1000000'
                    required
                    className='p-3 border border-gray-300 rounded-lg w-24 text-center focus:ring-4 focus:ring-yellow-400'
                  />
                  <div className='flex flex-col items-center'>
                    <p className='font-medium'>{label}</p>
                    <span className='text-xs text-gray-600'>($ / month)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-6'>
            <p className='font-semibold'>
              Images:
              <span className='font-normal text-gray-300 ml-2'>The first image will be the cover (max 6)</span>
            </p>
            <div className='flex gap-4'>
              <input
                className='p-3 border border-gray-300 rounded w-full focus:ring-4 focus:ring-yellow-400 text-black'
                type='file'
                id='images'
                accept='image/*'
                multiple
                onChange={(e) => setFiles([...e.target.files])}
              />
              <button
                onClick={handleImageSubmit}
                type='button'
                className='p-3 bg-green-500 text-white rounded-lg uppercase hover:bg-green-600 transition'
              >
                Upload
              </button>
            </div>
            <button className='p-4 bg-yellow-500 text-black font-bold rounded-lg uppercase hover:bg-yellow-600 transition'>
              Create Listing
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
