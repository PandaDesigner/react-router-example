import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { LayoutPublic } from './layouts/LayoutPublic';
import { NotFound } from './pages/NotFound';
import { BlogDetails } from './pages/blogs/BlogDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutPublic />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="/nosotros" />
          <Route element={<Contact />} path="/contacto" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetails />} path="/blog/:id" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
};
