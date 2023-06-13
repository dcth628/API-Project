import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import AllIngredients from "./components/Ingredient/IngredientAll/IngredientAll";
import IngredientDetail from "./components/Ingredient/IngredientDetail/IngredientDetail";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllRecipes from "./components/recipe/RecipeAll/RecipeAll"
import RecipeDetail from "./components/recipe/RecipeDetail/RecipeDetail";
import AllTypes from "./components/Type/TypeAll/TypeAll";
import ProfilePage from "./components/ProfilePage/Profile";
import AllCookbooks from "./components/Cookbook/CookbookAll/CookbookAll";
import CookbookDetail from "./components/Cookbook/CookbookDetail/CookbookDetail";
import CreateRecipeModal from "./components/recipe/RecipeCreate/RecipeCreate";
import EditRecipeModal from "./components/recipe/RecipeEdit/RecipeEdit";
import HomePage from "./components/HomePage/HomePage";
import ReviewbyRecipe from "./components/Review/ReviewByRecipe/ReviewByRecipe";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route exact path="/" >
            <HomePage />
          </Route> */}
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/ingredients">
            <AllIngredients />
          </Route>
          <Route path="/ingredients/:ingredientId">
            <IngredientDetail />
          </Route>
          <Route path='/reviews'>
            <ReviewbyRecipe />
          </Route>
          <Route exact path='/recipes'>
            <AllRecipes />
          </Route>
          <Route path='/recipes/create'>
            <CreateRecipeModal />
          </Route>
          <Route path='/recipes/edit'>
            <EditRecipeModal />
          </Route>
          <Route path='/recipes/:recipeId'>
            <RecipeDetail />
          </Route>
          <Route path='/types'>
            <AllTypes />
          </Route>
          <Route exact path='/'>
            <ProfilePage />
          </Route>
          <Route exact path='/cookbooks'>
            <AllCookbooks />
          </Route>
          <Route path='/cookbooks/:cookbookId'>
            <CookbookDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
