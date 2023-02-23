class DatabaseConnection {
  private static dbConn: DatabaseConnection;
  public name: string;

  private constructor() {
    this.name = "Singleton";
  }

  public static getDBConnection(): DatabaseConnection {
    if (this.dbConn == undefined) {
      this.dbConn = new DatabaseConnection();
    }

    return this.dbConn;
  }
}

console.log(DatabaseConnection.getDBConnection());
