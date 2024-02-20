
import { list } from '@vercel/blob';
import fs from 'node:fs/promises';
// import imageFiles from './images_urls.json'

const token = "vercel_blob_rw_GMbQmWJWrYZzY25d_rJ8sytK4G3Pc43BzPVRzcGXP7xNKYs"

export default async function Page() {
    const response = await list({token});
    
    fs.writeFile("blob_urls.json", JSON.stringify(response), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

