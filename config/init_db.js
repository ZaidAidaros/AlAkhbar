
const bcrypt = require('bcrypt');

const initAdminUser = async function(db){
    const user = await db.User.findOne({where:{ Id:1 }, attributes: ['UName']});
    
    if(!user){
        // create defualt admin user
        const pass = await bcrypt.hash("Admin123",10);
        await db.UserPermission.create({
            Id: 1,
            permission: process.env.USER_ADMIN_ROLE,
            description: "This Is Adminstration Role That Allow To Manage The Everything In This App",
        });
        await db.UserPermission.create({
            Id: 2,
            permission: process.env.USER_WRITTER_ROLE,
            description: "This Is Writer Role That Allow User To Have Writer Roles To Be Able To Write And Manage Articles",
        });
        await db.UserPermission.create({
            Id: 3,
            permission: process.env.USER_USER_ROLE,
            description: "This Is User Role That Gives Him Some Features Like Save Articles To Read Later And Subscribtions To News...",
        });
        await db.User.create({
            UName:"Admin",
            UPassword: pass,
            email:"admin@al-akhbar.com",
            isEmailVerified:true,
            userPermissionId:1
        });
        await db.User.create({
            UName:"Zaid",
            UPassword: await bcrypt.hash("Zaid123",10),
            email:"zaid@gmail.com",
            isEmailVerified:true,
            userPermissionId:3
        });
        await db.User.create({
            UName:"Ali",
            UPassword: await bcrypt.hash("Ali123",10),
            email:"ali@gmail.com",
            isEmailVerified:true,
            userPermissionId:3
        });
        await db.User.create({
            UName:"Ahmed",
            UPassword: await bcrypt.hash("Ahmed123",10),
            email:"ahmed@gmail.com",
            isEmailVerified:true,
            userPermissionId:3
        });
    }
}

module.exports = initAdminUser
