// const friends = [
//     { name: "Igor", online: false},
//     { name: "Dasha", online: true},
//     { name: "Sergiy", online: false},
// ];

// const findFriendByName = function(allFriends, friendName){
//     for(const friend of allFriends){
//         console.log(friend)
//         console.log(friend.name);

//         if(friend.name === friendName){
//             return console.log("Контакт знайдено");
//         }}
//         return console.log("Контакт не знайдено")
//     }
//     findFriendByName(friends, "Sergiy")


const friends = [
    { name: "Igor", online: false},
    { name: "Dasha", online: true},
    { name: "Sergiy", online: false},
];
const getOnlineFriend = function(allFriends){
const onlineFriends = [];

for(const friend of allFriends){
    // console.log("friend", friend);
    // console.log(friend.online);
    if(friend.online === true){
        onlineFriends.push(friend)
    }
}
return onlineFriends

}
console.log(getOnlineFriends(friends))