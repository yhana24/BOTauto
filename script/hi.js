module.exports["config"]= {
name: "hi",
version: "1.0.0",
role: 0,
credits: "010.dev",
info: "say hello!",
type: "fun",
usage: "",
};

module.exports["run"] = ({api, event, chat}) => {
    chat.reply("hello, babe😘");
};