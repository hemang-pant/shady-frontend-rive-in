import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import PlaylistsPage from "../pages/PlaylistsPage";
import ErrorPage from "../pages/ErrorPage";
import UploadPage from "../pages/UploadPage";
import ArtistePage from "../pages/ArtistePage";
import ArtistesPage from "../pages/ArtistesPage";
import FavoritesPage from "../pages/FavoritesPage";
import PlaylistPage from "../pages/PlaylistPage";
import CreatePlaylistPage from "../pages/CreatePlaylistPage";
import EditPlaylistPage from "../pages/EditPlaylistPage";
import SettingsPage from "../pages/SettingsPage";
import UserPage from "../pages/UserPage";
import SearchPage from "../pages/SearchPage";
import BrowsePage from "../pages/BrowsePage";
import LandingLayout from "../layouts/LandingLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "browse",
        element: <BrowsePage />,
      },
      {
        path: "playlists",
        element: <PlaylistsPage />,
      },
      {
        path: "playlists/:id",
        element: <PlaylistPage />,
      },
      {
        path: "playlists/create",
        element: <CreatePlaylistPage />,
      },
      {
        path: "playlists/edit/:id",
        element: <EditPlaylistPage />,
      },
      {
        path: "artistes",
        element: <ArtistesPage />,
      },
      {
        path: "artiste/:id",
        element: <ArtistePage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "upload",
        element: <UploadPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "search",
        element: <SearchPage />
      }
    ],
  },
  {
    path: "/landing",
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
  }
  // {
  //   path: "/",
  //   element: <UploadLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "upload",
  //       element: <UploadPage />,
  //     },
  //   ],
  // },
]);
