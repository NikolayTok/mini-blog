import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { postsState } from "@/store/postsState";
import { toast } from "react-toastify";
import { loadState } from "@/store/loadState";
import { userState } from "@/store/userState";
import { postService } from "@/services/posts/postService";
import Loader from "./ui/Loader";
import PostItem from "./PostItem";
import Tabs from "./ui/Tabs";
import { tokenState } from "@/store/tokenState";

type PostTab = "all" | "my";

const PostsList = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [loading, setLoading] = useRecoilState(loadState);
  const [activeTab, setActiveTab] = useState<PostTab | string>("all");
  const [user] = useRecoilState(userState);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [token] = useRecoilState(tokenState);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await postService.fetchPosts(
        activeTab === "my" ? user?.id : undefined,
        token || undefined
      );
      setPosts(data);
    } catch {
      toast.error("Error loading posts");
    } finally {
      setLoading(false);
    }
  }, [activeTab, setLoading, setPosts, token, user?.id]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    if (!token) setActiveTab("all")
  }, [token])

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPosts(posts);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(lowerCaseQuery) ||
            post.content.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  }, [searchQuery, posts]);

  return (
    <div className="mt-4">
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or content.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 w-96 rounded-lg shadow-sm"
        />
      </div>
      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={[
          { label: "All posts", value: "all" },
          { label: "My posts", value: "my", disabled: !user?.id },
        ]}
      />
      {loading ? (
        <Loader />
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostItem key={post.id} {...post} />)
      ) : (
        <p className="text-center mt-4 text-gray-500">No posts found</p>
      )}
    </div>
  );
};

export default PostsList;
