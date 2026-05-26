const API_ENDPOINT = [
  'https://openadavn.lncc.br/api',
  'https://146.134.8.12/api',
  'https://localhost:3001/api',
  'https://146.134.61.71:3001/api',
];

let activeApiBaseURL = null;

async function getActiveAPI() {
  if (activeApiBaseURL) {
    return activeApiBaseURL;
  }
  console.log("Determinando a URL da API ativa...");
  for (const baseURL of API_ENDPOINT) {
    try {
      const controller = new AbortController();
      const timeoutID = setTimeout(() => controller.abort(), 3000);
      const response = await fetch(`${baseURL}/check`, { signal: controller.signal });
      clearTimeout(timeoutID);

      if (response.ok) {
        activeApiBaseURL = baseURL;
        console.log(`API ativa encontrada em: ${baseURL}`);
        return activeApiBaseURL;
      }
    } catch (error) {
      console.warn(`Endpoint ${baseURL} falhou:`, error.name === 'AbortError' ? 'Timeout' : error.message);
    }
  }
  throw new Error("Nenhuma API está acessível");
}

async function fetchAuth(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  const baseURL = await getActiveAPI();
  const url = `${baseURL}/v1${endpoint}`;
  
  if (!token) {
    window.location.href = `${activeApiBaseURL}/login`;
    throw new Error("Token de autenticação não encontrado");
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };
  console.log(`DEBUG: ${headers}`);
  
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const config = {
    ...options,
    headers: headers,
  };
  
  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ erro: 'Erro desconhecido' }));
    throw new Error(errorData.erro || `Erro na requisição para ${endpoint}: ${response.statusText}`);
  }
  
  const responseText = await response.text();
  if (!responseText) {
    return { sucesso: true };
  }
  
  try {
    return JSON.parse(responseText);
  } catch (err) {
    console.log(`Request debugger:`, err.message);
    return { sucesso: true, dados: responseText };
  }
}

export async function login(email, password) {
  const baseURL = await getActiveAPI();
  const response = await fetch(`${baseURL}/v1/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Falha no Login: Dados inválidos.");
  }
  return response.json();
}

export async function cadastroUsuario(dados) {
  const baseURL = await getActiveAPI();
  const response = await fetch(`${baseURL}/v1/users/cadastro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.erro || 'Falha ao criar usuário');
  }
  return response.json();
}

export async function recuperarSenha(email) {
  const baseURL = await getActiveAPI();
  const response = await fetch(`${baseURL}/v1/users/recuperar-senha`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    throw new Error("Falha ao recuperar senha");
  }
  return response.json();
}

export async function resetSenha(token, novaSenha) {
  const baseURL = await getActiveAPI();
  const response = await fetch(`${baseURL}/v1/users/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, novaSenha }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Falha ao redefinir senha');
  }
  return response.json();
}

export async function ativarConta(token) {
  const baseURL = await getActiveAPI();
  try {
    const response = await fetch(`${baseURL}/v1/users/ativar/${token}`);
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || 'Falha ao ativar conta');
    }
    return data;
  } catch (err) {
    console.error("Erro detalhado:", err);
    throw err;
  }
}

export const fetchModeloEncrypted = (modelName) => fetchAuth(`/modelos/${modelName}`);
export const updateModelo = (modelName, dados) => fetchAuth(`/modelos/${modelName}`, { method: 'PUT', body: JSON.stringify(dados) });

export const fetchJobsTodos = () => fetchAuth('/jobs');
export const fetchJobById = (id) => fetchAuth(`/jobs/${id}`);
export const fetchJobsByUsuario = (usuarioId) => fetchAuth(`/jobs/user/${usuarioId}`);
export const createJob = (jobData) => fetchAuth('/jobs', { method: 'POST', body: JSON.stringify(jobData) });
export const updateJob = (id, jobData) => fetchAuth(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(jobData) });
export const deleteJob = (id) => fetchAuth(`/jobs/${id}`, { method: 'DELETE' });

export const fetchResultadosByUsuario = () => fetchAuth('/resultados');
export const fetchResultadoById = (id) => fetchAuth(`/resultados/${id}`);
export const fetchArquivosResultado = (jobId) => fetchAuth(`/job/${jobId}/resultados`);
export const createResultado = (resultadoData) => fetchAuth('/resultados', { method: 'POST', body: JSON.stringify(resultadoData) });
export const updateResultado = (id, resultadoData) => fetchAuth(`/resultados/${id}`, { method: 'PUT', body: JSON.stringify(resultadoData) });
export const deleteResultado = (id) => fetchAuth(`/resultados/${id}`, { method: 'DELETE' });

export const sendContactMessage = async (contactData) => {
  const baseURL = await getActiveAPI();
  const response = await fetch(`${baseURL}/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData)
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.erro || 'Erro ao enviar mensagem');
  }
  return response.json();
};

export const fetchJobBySimID = (simID) => fetchAuth(`/jobs/sim/${simID}`);

export default { fetchAuth };