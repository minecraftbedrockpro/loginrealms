function login() {
    const gamertag = document.getElementById('gamertag').value;
    const password = document.getElementById('password').value;

    // Codigos de senha dos Realms
    const realms = {
        "2b2t": "15/04/20:00",   // Senha para o Realm 2b2t
        "Conflitos": "16/04/13:00" // Senha para o Realm Conflitos
    };

    // Verifica se a senha corresponde ao código correto do Realm
    if (gamertag && password) {
        // Verifica a validade da senha
        if (realms[gamertag] && realms[gamertag] === password) {
            document.getElementById('loginContainer').style.display = 'none';
            // Adiciona um pequeno delay para transição
            setTimeout(() => {
                document.getElementById('conteudoProtegido').style.display = 'block';
                document.getElementById('welcomeMessage').innerText = `Bem-vindo, ${gamertag}!`;

                // Mostrar opções de Realm após login e configurar o botão
                let realmLink = '';
                let realmMessage = '';

                if (gamertag === "2b2t") {
                    realmLink = 'minecraft://acceptRealmInvite?inviteID=gQqV3ETZqXQwvEU'; // Alterar para código correto do Realm 2b2t
                    realmMessage = "Você está no Realm 2b2t!";
                } else if (gamertag === "Conflitos") {
                    realmLink = 'minecraft://acceptRealmInvite?inviteID=Tpc7VVt4vNoRJfg'; // Alterar para código correto do Realm Conflitos
                    realmMessage = "Você está no Realm Conflitos!";
                }

                // Exibe a mensagem do Realm
                document.getElementById('realmsMessage').innerText = realmMessage;

                // Atualiza o botão para redirecionar para o Realm
                const enterButton = document.getElementById('enterRealmButton');
                enterButton.onclick = () => {
                    window.location.href = realmLink; // Redireciona para o Realm
                };
            }, 300); // Adiciona um pequeno delay para a transição de tela
        } else {
            document.getElementById('loginStatus').innerText = 'Senha incorreta para este Realm.';
        }
    } else {
        document.getElementById('loginStatus').innerText = 'Por favor, preencha todos os campos.';
    }
}

function copyCode() {
    const gamertag = document.getElementById('gamertag').value;
    
    // Define o código de entrada com base no Realm
    let codeToCopy = '';
    if (gamertag === "2b2t") {
        codeToCopy = 'gQqV3ETZqXQwvEU'; // Alterar para código correto do Realm 2b2t
    } else if (gamertag === "Conflitos") {
        codeToCopy = 'Tpc7VVt4vNoRJfg'; // Alterar para código correto do Realm Conflitos
    }

    // Cria um elemento temporário para copiar o código
    const tempInput = document.createElement('textarea');
    tempInput.value = codeToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    document.getElementById('copiedMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('copiedMessage').style.display = 'none';
    }, 2000);
}
