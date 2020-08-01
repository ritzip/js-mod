if(!this.global.done){
    this.global.done = true;


    var scripter;
    const me = () => scripter;
    const summon = (u, a, x, y, team) => {for(i = 0; i<a; i++){ un = u.create(team); un.set(x, y); un.add()}};
    const findp = (name) => Vars.playerGroup.find(boolf(player => Strings.stripColors(player.name)==name));
    const setblock = (block, tile, team) => {tile.setNet(block, team, 90); block.placed(tile)};


    Events.on(EventType.ClientLoadEvent, run(() => {
        scripter = Vars.player;
    }));
    Events.on(EventType.PlayerChatEvent, cons(e => {
        if(e.message.split(" ")[0]=="!js" && e.player.isAdmin){
            scripter = e.player;

            var msg;
            try{
                msg = Vars.mods.getScripts().runConsole(e.message.slice(4, e.message.length));
            } catch(er){
                msg = er.toString();
            }
            msg = "[lightgray]" + msg;

            Core.app.post(run(() => {
                Vars.player.sendMessage(msg);
                if(e.player == Vars.player) return;

                e.player.sendMessage(msg);
            }));
        }
        scripter = Vars.player; // so that after exit of map me() is still you
    }));
}
