if(!this.global.done){
    this.global.done = true;

    var scripter = Vars.player
    const me = () => scripter;
    const summon = (u, a, x, y, team) => {for(i = 0; i<a; i++){ un = u.create(team); un.set(x, y); un.add()}};
    const findp = (name) => Vars.playerGroup.find(boolf(player => Strings.stripColors(player.name)==name));

    Events.on(EventType.PlayerChatEvent, cons(e => {
        if(e.message.split(" ")[0]=="!js" && e.player.isAdmin){
            scripter = e.player;
            var msg;
            try{
                msg = Vars.mods.getScripts().runConsole(e.message.slice(4, e.message.length));
            } catch(er){
                msg = er.toString();
            }

            Core.app.post(run(() => {
                Vars.player.sendMessage(msg);
                if(e.player == Vars.player) return;

                e.player.sendMessage(msg);
                print(msg)
            }));
        }
    }));
}
