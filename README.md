# orangeHRM

```
public static ConnectionInfo readProfile(String id){
        String username = null;
        String password = null;
        String port = null;
        String dbName = null;
        File inputFile = new File("./Profiles.txt");
        try{
            Scanner in = new Scanner(inputFile);
            while(in.hasNextLine()){
                String string = in.nextLine();
                String[] stringArray = string.split(",");
                if(id.equals(stringArray[0])) {
                    username = stringArray[1];
                    password = stringArray[2];
                    port = stringArray[3];
                    dbName = stringArray[4];
                }
            }
            Logger.logInfo("Successfully read profile");
            return new ConnectionInfo(username,password,port,dbName);
        }
        catch (FileNotFoundException ex){
            Logger.logError("Failed to read profile");
            System.out.println("FileNotFoundException: " + ex.getMessage());
            return null;
        }
    }
  ```
