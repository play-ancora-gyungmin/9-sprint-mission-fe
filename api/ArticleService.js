const API_URL = "https://panda-market-api-crud.vercel.app/articles";

const getArticleList = async function(page=1, pageSize=10, keyword="") {
  const url = `${API_URL}?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

const getArticle = async function(id) {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

const createArticle = async function(contents) {
  const url = `${API_URL}`
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(contents),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

const patchArticle = async function(id, contents) {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(contents),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

const deleteArticle = async function(id) {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export default {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle
}