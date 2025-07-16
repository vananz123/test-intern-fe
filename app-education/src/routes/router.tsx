import DefaulfLayout from "@/components/layout/defaulf-layout";
import DetailProduct from "@/pages/detail-product";
import FavoriteProduct from "@/pages/favorite-product";
import HistoryView from "@/pages/history-view";
import Home from "@/pages/home";
import ShoppingCart from "@/pages/shopping-cart";
import SuggestionsProduct from "@/pages/suggestions";
import { Suspense } from "react";
import { useRoutes } from "react-router";

export function Router(){
    return useRoutes([
        {
            path:'/',
            element:<DefaulfLayout/>,
            children:[
                {
                    path: '/',
                    element: <Suspense>
                        <Home/>
                    </Suspense>,
                },{
                    path: '/:id',
                    element: <Suspense>
                        <DetailProduct/>
                    </Suspense>,
                },{
                    path: '/cart',
                    element: <Suspense>
                        <ShoppingCart/>
                    </Suspense>,
                },{
                    path: '/history-view',
                    element: <Suspense>
                        <HistoryView/>
                    </Suspense>,
                },{
                    path: '/favorite',
                    element: <Suspense>
                        <FavoriteProduct/>
                    </Suspense>,
                },{
                    path: '/suggestions',
                    element: <Suspense>
                        <SuggestionsProduct/>
                    </Suspense>,
                }
            ]
        },
    ])
}