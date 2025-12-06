import { api } from "/client/shared/js/api-client.js";
import { showToast } from "/client/components/toast.js";

const uploadInput = document.getElementById("mediaUpload");
const uploadBtn = document.getElementById("mediaUploadBtn") || document.getElementById("mediaUploadSubmit");
const gallery = document.getElementById("mediaGallery") || document.getElementById("mediaList");

async function loadMedia(){
  const data = await api.get("/media");
  if(data?.error) return;
  gallery.innerHTML = "";
  data.forEach(m => {
    const el = document.createElement("div");
    el.className = "media-item";
    const ext = (m.file_path || "").split(".").pop();
    if(ext && ["png","jpg","jpeg","webp"].includes(ext.toLowerCase())){
      const img = document.createElement("img");
      img.src = "/"+m.file_path.replace(/^\/+/,"");
      el.appendChild(img);
    } else {
      const ico = document.createElement("div");
      ico.textContent = ext || "file";
      el.appendChild(ico);
    }
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = async () => {
      const res = await api.del("/media/" + m.id);
      if(res?.error) showToast("Delete failed","error"); else { showToast("Deleted","success"); loadMedia(); }
    };
    el.appendChild(del);
    gallery.appendChild(el);
  });
}

uploadBtn.onclick = async () => {
  const f = uploadInput.files[0];
  if(!f) return showToast("Select a file","warn");
  const fd = new FormData();
  fd.append("file", f);
  fd.append("type", f.type.split("/")[0] || "file");
  const res = await api.postForm("/media", fd);
  if(res?.error) return showToast("Upload failed","error");
  showToast("Uploaded","success");
  await loadMedia();
};

loadMedia();
