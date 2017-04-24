const discordAPI = 'https://dags.me/discord/207677939146424331';

function initDiscord(title, content) {
    query(discordAPI, title, content, drawDiscord);
}

function drawDiscord(title, content, status) {
    const discordTitle = document.getElementById(title);
    const discordContent = document.getElementById(content);

    clear(discordTitle);
    clear(discordContent);

    var members = status['members'];
    var title = createDiscordTitle(status);
    discordTitle.appendChild(title);

    if (members !== undefined) {
        for (var i = 0; i < members.length; i++) {
            var member = members[i];
            var user = createDiscordUser(member);
            discordContent.appendChild(user);
        }
    }
}

function createDiscordTitle(status) {
    var members = status['members'];
    var invite = status['instant_invite'];
    var title = document.createElement('a');
    
    title.target = '_blank';
    
    if (invite !== undefined) {
        title.href = invite;
    }

    if (members !== undefined) {
        var total = members.length;
        title.innerText = `Discord: ${total} Online`;
    } else {
        title.innerText = 'Discord: Status Unavailable';
    }

    return title;
}

function createDiscordUser(member) {
    var container = document.createElement('div');
    container.className = 'server-tooltip';

    var avatar = document.createElement('img');
    avatar.src = member['avatar_url'];

    var tooltip = document.createElement('div');
    tooltip.className = `server-tooltiptext status-${member.status}`;
    tooltip.innerText = member['username'];

    container.appendChild(tooltip);
    container.appendChild(avatar);

    return container;
}
