function buscarUsuario() {
  const user = document.getElementById('username').value.trim();
  const result = document.getElementById('result');
  if (!user) return result.innerHTML = "Digite um usuário!";

  result.innerHTML = "Buscando...";
  fetch(`https://api.github.com/users/${user}`)
    .then(res => res.ok ? res.json() : Promise.reject("Usuário não encontrado!"))
    .then(data => {
      result.innerHTML = `
        <img src="${data.avatar_url}" width="80">
        <p><strong>${data.login}</strong></p>
        <p>Repositórios: ${data.public_repos}</p>
        <p>Seguidores: ${data.followers}</p>
        <a href="${data.html_url}" target="_blank">Perfil</a>
      `;
    })
    .catch(err => result.innerHTML = `<p style="color:red;">${err}</p>`); 
  }