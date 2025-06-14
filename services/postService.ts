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

export async function createLike(id: number, data: any) {
  const res = await fetch(`${BASE_URL}/storelike/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Invalid JSON: ${text}`);
  }
}

export async function createComment(postId: number, data: { user_id: number, comment: string }) {
  const res = await fetch(`${BASE_URL}/postcomment/${postId}`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: data.user_id,
      comment: data.comment
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to create comment: ${errorText}`);
  }

  const json = await res.json();
  return json;
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
