export function formatISO(d){
  const dt = d ? new Date(d) : new Date();
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth()+1).padStart(2,"0");
  const dd = String(dt.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

export function startOfMonth(d){
  const dt = d ? new Date(d) : new Date();
  return new Date(dt.getFullYear(), dt.getMonth(), 1);
}

export function endOfMonth(d){
  const dt = d ? new Date(d) : new Date();
  return new Date(dt.getFullYear(), dt.getMonth()+1, 0);
}
