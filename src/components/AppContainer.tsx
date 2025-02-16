import PostsList from "@/components/PostsList";
import CreatePost from "@/components/CreatePostForm";
import Header from "@/components/Header";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

export const AppContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <CreatePost />
      <PostsList />
      <RegisterModal />
      <LoginModal />
    </div>
  );
};