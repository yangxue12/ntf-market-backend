import { create } from 'kubo-rpc-client';
import fs from 'fs';

const ipfs = create('http://43.129.194.130:5001');

export async function uploadFileToIPFS(filePath){
    const file=fs.readFileSync(filePath);
    const result=await ipfs.add({path: filePath , content: file});

    return result;
}

export async function uploadJSONToIPFS(json){
    const result= await ipfs.add(JSON.stringify(json));
    return result;
}

uploadFileToIPFS("files/1.png")
uploadJSONToIPFS({name:"test"})