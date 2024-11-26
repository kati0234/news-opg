const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  prefer: "return=representation",
  apikey: key,
};

export async function getSub() {
  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });
  //text skal rettes til jason
  const data = await response.json();
  //   console.log(data);
  return data;
}

export async function getSubById(id) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    method: "GET",
    headers: headersList,
  });
  //text skal rettes til jason
  const data = await response.json();
  //   console.log(data);
  return data;
}
export async function postSub(subdata) {
  const response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subdata),
  });
  //text skal rettes til jason
  const data = await response.json();
  return data;
}

export async function patchSub(id, patchdata) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    method: "PATCH",
    headers: headersList,

    body: JSON.stringify(patchdata),
  });
  const data = await response.json();
  return data;
}
export async function deleteSub(id) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    method: "DELETE",
    headers: headersList,
  });
  const data = await response.json();
  return data;
}
