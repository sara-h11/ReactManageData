
import AppLayout from "./AppLayout";
import {lazy, Suspense} from 'react';
import Posts from 'views/features/posts/Posts';
import TaskList from 'views/components/tasks/TaskList';
import { Navigate, Route, Routes } from "react-router-dom";
import Counter from 'views/components/counter/Counter';
import NotFound from './NotFound';
import Login from 'views/features/auth/login';
import ProtectedRout from "./ProtectedRout";

const Photos = lazy(() =>  import("views/components/photos/Photos"));
const PhotoDetail = lazy(() =>  import("views/components/photos/PhotoDetail"));
const Todos = lazy( () => import("views/components/Todos"));
const Comments = lazy( () => import('views/components/Comments'));

function BaseLayout() {
    return ( 
        <>
             <Routes>
                    <Route
                      path="/"
                      element={<AppLayout /> }
                    >
                              <Route
                      path="/"
                      element={
                        <>
                          <h2>Home Page</h2>
                        </>
                      }
                    />
                    <Route path="posts" element={<Suspense fallback={<div>is loading</div>}>
                    <ProtectedRout ><Posts /></ProtectedRout>
                    </Suspense>} />
                    <Route path="tasks" element={<TaskList />} />
                    <Route path="comments" element={<Suspense fallback={<div>is loading</div>}>
                      <Comments /></Suspense>} />
                    <Route path="todos" element={<Suspense fallback={<div>is loading</div>}>
                      <Todos /> </Suspense>} />
                    <Route path="photos" element={<Suspense fallback={<div>is  loading</div>}>
                      <Photos /> </Suspense>} >
                      <Route
                        path=":id"
                        element={<Suspense fallback={<div>is  loading</div>}>
                          <PhotoDetail /> </Suspense>}
                        />
                      </Route>
                    <Route path="counter" element={<Suspense fallback={<div>is loading</div>}>
                      <Counter /> </Suspense> } />
                    {/* <Route path="photos/:id" element={<Suspense fallback={<div>is loading</div>}>
                      <PhotoDetail /></Suspense>} /> */}
                    <Route path="/404" element={<NotFound />}/>
                    <Route path="*" element={<Navigate to="/404" replace={true} />}/>
                    </Route>
                    <Route
                      path="/login"
                      element={<Login /> }
                    />
            </Routes>
        </>
     );
}

export default BaseLayout;