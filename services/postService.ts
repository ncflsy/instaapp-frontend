const BASE_URL = 'http://192.168.1.6:8000/api/post';

export async function getAllPosts() {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return json.data;
}

export async function getPostById(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const json = await res.json();
  return json.data;
}

export async function createPost(data: any) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function updatePost(id: number, data: any) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function deletePost(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return await res.json();
}
