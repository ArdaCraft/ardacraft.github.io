const minecraftAPI = 'https://dags.me/status/mc.ardacraft.me';
const minecraftLink = 'https://minecraft.me/map';

function initMinecraft(title, content) {
    query(minecraftAPI, title, content, drawMinecraft);
}

function createHeadURL(player) {
    return `https://minotar.net/helm/${player}`;
}

function drawMinecraft(title, content, status) {
    const minecraftTitle = document.getElementById(title);
    const minecraftContent = document.getElementById(content);

    clear(minecraftTitle);
    clear(minecraftContent);

    var title = createMCTitle(status);
    minecraftTitle.appendChild(title);

    var players = status['players'];
    if (players !== undefined) {
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var user = createMCUser(player);
            minecraftContent.appendChild(user);
        }
    }
}

function createMCTitle(status) {
    var online = status['online'];
    var title = document.createElement('a');
    title.title = 'server ip: mc.ardacraft.me';

    if (online !== undefined) {
        title.href = minecraftLink;
        title.innerText = `ArdaCraft: ${online} Online`;
    } else {
        title.innerText = 'ArdaCraft: Status Unavailable';
    }

    return title;
}

function createMCUser(player) {
    var avatar = document.createElement('img');
    avatar.title = player;
    avatar.src = createHeadURL(player);
    return avatar;
}
