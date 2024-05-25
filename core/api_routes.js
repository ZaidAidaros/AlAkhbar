const { feedback } = require("../controllers/homeController")
const article_category = require("../models/article_category")

const apiAuthRoutes ={
    root: "/api/auth",
    logIn: "/login",
    signUp: "/signup",
    verifyEP: "/verify",
    verifyEPByFire: "/verify-fire",
    foregetpassword: "/foregetpassword",
    resetpassword: "/resetpassword",
    resetpasswordByFire: "/resetpassword-fire",
}

const apiHomeRoutes ={
    root: "/api/home/",
    homeArticleCategory: "/articles-categories",
    homeArticles: "/articles",
    homeArticlesSearch: "/articles/search",
    homeArticleById: "/articles/:id",
    homeArticleComments: "/articles-comments",
    feedback: "/feedback",
}

module.exports = {apiAuthRoutes,apiHomeRoutes}