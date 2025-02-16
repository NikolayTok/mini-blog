import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { postsState } from "@/store/postsState";
import Button from "./ui/Button";
import { postService } from "@/services/posts/postService";

interface FormData {
  title: string;
  content: string;
}

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
  });
  const setPosts = useSetRecoilState(postsState);

  const onSubmit = async (data: FormData) => {
    try {
      await postService.createPost(data);
      const updatedData = await postService.fetchPosts();
      setPosts(updatedData);
      reset();
      toast.success("Post created successfully!");
    } catch {
      toast.error("Error creating post");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-lg shadow-md space-y-2">
      <div>
        <input
          {...register("title", { required: "Title is required", minLength: { value: 2, message: "Title must be at least 2 characters long" } })}
          placeholder="Title"
          className="border p-2 w-full rounded"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <textarea
          {...register("content", { required: "Content is required", minLength: { value: 10, message: "Content must be at least 10 characters long" } })}
          placeholder="Content"
          className="border p-2 w-full rounded"
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Post"}
      </Button>
    </form>
  );
};

export default CreatePostForm;
