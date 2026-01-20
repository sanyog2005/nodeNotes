import { log } from 'console';
import { create } from 'domain';
import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'
//
const read = async(filename)=>{
    const data = await readFile(filename,'utf-8');
    console.log(data);
}
read('test.txt');

const createa = async (fileName,content)=>{
    await writeFile(fileName,content);
    console.log("file done");
    
}
createa('test4.txt',"hello world");
const appendfile = async(fileName , content)=>{
    await appendFile(fileName,content);
    console.log("file appended");
}
appendfile('test4.txt',"  appended content");

const createDir = async (dir)=>{
    await mkdir(dir)

}
createDir('newDir');