//Sagar vaishnav

import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'your DB name'; //demoDB.db
const database_version = '1.0'; // DB version
const database_displayname = 'SQLite React Offline Database';
const database_size = 2000000; // Size of DB

export default class Database {
 
  //initlization of Databse
  static initDB() {
    let db;
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size,
      )
        .then((DB) => {
          db = DB;
          // console.log("Database OPEN");
          resolve(db);
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  }

  //Create new Table in DB
  static createNewTable(query) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(query).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              // this.closeDatabase(db);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    });
  }

    //Insert data in Table 

    static insertItemIntoTable(query) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(query).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              //  this.closeDatabase(db);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    });
  }

  //Retrive data in from table 
  static getItemFromTable(query) {
    return new Promise((resolve) => {
      const products = [];
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(query, []).then(([tx, results]) => {
              // console.log("Query completed");
              resolve(results);
            });
          })
            .then((result) => {
              // this.closeDatabase(db);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    });
  }

// Delete record
  static deleteRecord(query) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(query).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              //  this.closeDatabase(db);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    });
  }

  //Close databse  
  static closeDatabase(db) {
    if (db) {
      // console.log("Closing DB");
      db.close()
        .then((status) => {
          // console.log("Database CLOSED");
        })
        .catch((error) => {
          //   this.errorCB(error);
        });
    } else {
      // console.log("Database was not OPENED");
    }
  }

  //Drop table from DB
  static dropTable(tableName) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(`DROP TABLE ${tableName}`).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              // this.closeDatabase(db);
            })
            .catch((err) => {
              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    });
  }

}
