import {Client, Account, ID} from 'appwrite'
import conf from '../conf/conf';
class AuthService{
    client = new Client();
    // account = new Account();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //Navigate To Login
                return this.loginAccount({email, password})
            } else{
                return userAccount;
            }
        } catch (error) {
            console.log("createAccount " + error)
        }
    }

    async loginAccount({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password)
        } catch(error){
            console.log("loginAccount " + error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("current user " + error)
        }
        return null; 
    }

    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("logout " + error)
        }
    }
}

const authService = new AuthService();
export default authService;