const router = require("express").Router();
const homeController = require("../controllers/homeController");
const {
  getArticleCategories,
} = require("../controllers/articleCategoryController");
const {apiHomeRoutes} = require("../core/api_routes");

router.get(apiHomeRoutes.homeArticleCategory, getArticleCategories);
router.get(apiHomeRoutes.homeArticles, homeController.getCategArticles);
router.get(apiHomeRoutes.homeArticlesSearch, homeController.search);
router.get(apiHomeRoutes.homeArticleById, homeController.getArticleById);
router.get(apiHomeRoutes.homeArticleComments, homeController.getArticleComments);

router.post(apiHomeRoutes.feedback, homeController.feedback);

module.exports = router;
