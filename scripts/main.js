if(!this.global.done){
    this.global.done = true;
    const me = () => Vars.player;
    const summon = (u, a, x, y, team) => {for(i = 0; i<a; i++){ un = u.create(team); un.set(x, y); un.add()}};
    const findp = (name) => Vars.playerGroup.find(boolf(player => Strings.stripColors(player.name)==name));

    Events.on(EventType.PlayerChatEvent, cons(e=>{
        if(e.message.split(" ")[0]=="!js"&&e.player.isAdmin){
            var commands = [
                "me = (() => {Vars.playerGroup.all().get(" + e.player.id + ")})",
                "summon = ((u, a, x, y, team) => {for(i = 0; i<a; i++){ un = u.create(team); un.set(x, y); un.add()}})",
                "findp = ((name) => {Vars.playerGroup.find(boolf(player => Strings.stripColors(player.name)==name))})",
                "\"Empty\"",
                e.message.slice(4, e.message.length)
            ].join(";\n");

            var msg;
            try{
                msg = Vars.mods.getScripts().runConsole(commands).slice(0, Vars.maxTextLength);
            } catch(e){
                msg = e.toString();
            }

            Core.app.post(run(() => Call.sendChatMessage(msg)));
        }
    }));
}
