function login() {
    const gamertag = document.getElementById('gamertag').value;
    const password = document.getElementById('password').value;

    const realmName = "Reinos";
    const realmCode = "001122";

    if (gamertag && password) {
        if (gamertag === realmName && password === realmCode) {
            document.getElementById('loginContainer').style.display = 'none';

            setTimeout(() => {
                document.getElementById('conteudoProtegido').style.display = 'block';
                document.getElementById('welcomeMessage').innerText = `Bem-vindo ao Realm: ${gamertag}`;

                document.getElementById('realmsMessage').innerText = "Você está no Realm Reinos!";

                const enterButton = document.getElementById('enterRealmButton');
                enterButton.onclick = () => {
                    window.location.href = 'minecraft://acceptRealmInvite?inviteID=Tpc7VVt4vNoRJfg';
                };
            }, 300);
        } else {
            document.getElementById('loginStatus').innerText = 'Senha incorreta para esta série.';
        }
    } else {
        document.getElementById('loginStatus').innerText = 'Por favor, preencha todos os campos.';
    }
}

function copyCode() {
    const gamertag = document.getElementById('gamertag').value;

    if (gamertag === "Reinos") {
        const codeToCopy = 'Tpc7VVt4vNoRJfg';
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
}

// Ativa o login ao pressionar Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});
