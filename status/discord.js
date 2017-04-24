const discordAPI = 'https://discordapp.com/api/guilds/207677939146424331/widget.json';
const discordLink = 'https://discord.gg/fykFabG';

function initDiscord(title, content) {
    query(discordAPI, title, content, drawDiscord);
}

function drawDiscord(title, content, json) {
    const discordTitle = document.getElementById(title);
    const discordContent = document.getElementById(content);

    clear(discordTitle);
    clear(discordContent);

    var members = json['members'];
    var title = createDiscordTitle(members);
    discordTitle.appendChild(title);

    if (members !== undefined) {
        for (var i = 0; i < members.length; i++) {
            var member = members[i];
            var user = createDiscordUser(member);
            discordContent.appendChild(user);
        }
    }
}

function createDiscordTitle(members) {
    var total = members.length;
    var title = document.createElement('a');
    title.href = discordLink;

    if (members !== undefined) {
        title.innerText = `Discord: ${total} Online`;
    } else {
        title.innerText = 'Discord: Status Unavailable';
    }

    return title;
}

function createDiscordUser(member) {
    var avatar = document.createElement('img');
    avatar.src = member['avatar_url'];
    avatar.title = member['username'];
    avatar.className = `status-${member.status}`;
    return avatar;
}
