import React from 'react';
import App from './components/App'
import NewRecipe from './components/NewRecipe'
import Menu from './components/Menu'
import Recipe from './components/Recipe'
import About from './components/About'

const routes = [
    {path: '/', 
     element: <App/>,
     children: [
        {
            path: '/new-recipe', 
            element: <NewRecipe />
        }, 
        {
            path: '/menu' ,
            element: <Menu />
        }, 
        {
            path: '/recipe/:id', 
            element: <Recipe />
        }, 
        {
            path: '/about', 
            element: <About />
        }
     ]
}
]

export default routes