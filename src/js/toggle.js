const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
      return new Promise((resolve, reject) => {
        if(!allUsers) reject(Error("Userlist is invalid"));
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
    
          resolve(updatedUsers);
      })
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
toggleUserState(users, 'Mango').then(logger).catch(err => console.log(err));
toggleUserState(users, 'Lux').then(logger).catch(err => console.log(err));