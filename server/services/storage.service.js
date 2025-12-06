import fs from "fs";
import {promises as fsp} from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, "..", "uploads");

async function ensureDir(){
  try{ await fsp.mkdir(UPLOAD_DIR, { recursive: true }); }catch(e){}
}

async function saveBuffer(filename, buffer){
  await ensureDir();
  const safe = `${Date.now()}-${filename.replace(/\s+/g,"_")}`;
  const full = path.join(UPLOAD_DIR, safe);
  await fsp.writeFile(full, buffer);
  return full;
}

async function saveBase64(filename, b64){
  const [,data] = b64.match(/^data:.*;base64,(.*)$/) || [];
  const buf = data ? Buffer.from(data, "base64") : Buffer.from(b64, "base64");
  return saveBuffer(filename, buf);
}

async function removeFile(filePath){
  try{ await fsp.unlink(filePath); return true; }catch(e){ return false; }
}

export default {
  async uploadFromBuffer(filename, buffer){
    const saved = await saveBuffer(filename, buffer);
    return { path: saved, filename: path.basename(saved) };
  },

  async uploadFromBase64(filename, base64string){
    const saved = await saveBase64(filename, base64string);
    return { path: saved, filename: path.basename(saved) };
  },

  async exists(filePath){
    try{ await fsp.access(filePath, fs.constants.F_OK); return true; }catch(e){ return false; }
  },

  async remove(filePath){
    return removeFile(filePath);
  },

  getUploadPath(){
    return UPLOAD_DIR;
  }
};
