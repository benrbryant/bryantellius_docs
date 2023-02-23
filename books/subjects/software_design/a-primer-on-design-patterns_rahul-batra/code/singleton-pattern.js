var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        this.name = "Singleton";
    }
    DatabaseConnection.getDBConnection = function () {
        if (this.dbConn == undefined) {
            this.dbConn = new DatabaseConnection();
        }
        return this.dbConn;
    };
    return DatabaseConnection;
}());
console.log(DatabaseConnection.getDBConnection());
