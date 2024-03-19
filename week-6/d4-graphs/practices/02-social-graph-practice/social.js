// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    const newID = this.currentID;

    this.users[newID] = { id: newID, name: name };
    this.follows[newID] = new Set();

    return newID;
  }

  getUser(userID) {
    // Your code here
    if (this.users[userID]) return this.users[userID];
    else return null;
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false;

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID]
  }

  getFollowers(userID) {
    // Your code here
    const followers = new Set();

    for (let id in this.follows) {
      if (this.follows[id].has(userID)) followers.add(parseInt(id));
    };

    return followers;
  }
  
  getRecommendedFollows(userID, degrees) {
    // Your code here
    const visited = new Set();
    const queue = [{ userID, degree: 0 }];
    const recommended = new Set();

    while (queue.length > 0) {
      const { userID, degree } = queue.shift();
      visited.add(userID);

      if (degree === degrees) {
        this.follows[userID].forEach((followedID) => {
          if (!visited.has(followedID) && !this.follows[userID].has(followedID)) {
            recommended.add(followedID);
          }
        });
      } else if (degree < degrees) {
        this.follows[userID].forEach((followedID) => {
          if (!visited.has(followedID)) {
            queue.push({ userID: followedID, degree: degree + 1 });
          }
        });
      }
    }
    return Array.from(recommended);
  
  }
}

module.exports = SocialNetwork;
