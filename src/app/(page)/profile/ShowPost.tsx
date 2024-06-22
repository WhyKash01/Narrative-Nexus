import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import up from "./../../../../public/uper.png";
import down from "./../../../../public/downer.png";
import comment from "./../../../../public/comment.png";
import dots from "./../../../../public/dots.png";
import edit from "./../../../../public/edit.png";
import del from "./../../../../public/delete.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { posts } from "@/store/atom";

const Post = (props: any) => {
  const router = useRouter();
  const [post, setPost] = useRecoilState<any>(posts);
  const session :any= useSession();
  return (
    <div className="px-5 py-5 border rounded-md">
      <div className="flex justify-between">
        <div className="flex items-center text-sm gap-2">
          <Avatar className="w-7 h-7 text-xs">
            <AvatarImage src={props.proPhoto} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="font-semibold">{props.username}</div>

          <div className="ml-2 font-semibold">{props.topic}</div>
        </div>
        <div className="flex ">
          <Button className="bg-red-700 font-bold text-sm h-6 rounded-full">
            Join
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-2 focus:ring-0 focus:border-none">
              <Image src={dots} className="w-6 h-6" alt=""></Image>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-zinc-900 py-3 px-3 rounded-md relative top-2 border-zinc-700 border ">
              <DropdownMenuItem
                onClick={() => {
                  router.push(`/EditPost?id=${props.id}`);
                }}
                className="hover:cursor-pointer mb-2 bg-zinc-800 px-5 py-2 flex gap-2 rounded-md items-center text-sm font-semibold"
              >
                <Image src={edit} className="w-5 h-5" alt=""></Image> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  async function deleteBlogPost(id: string) {
                    try {
                      const response = await axios.delete('/api/blog', {
                        data: { id }, // Axios allows specifying request body in delete
                      });
                  
                      console.log(response.data);
                      alert('Blog post deleted successfully');
                    } catch (error) {
                      console.error('Error deleting blog post:', error);
                      alert('Failed to delete blog post');
                    }
                  }
                  async function data() {
                    const posts: any = await axios.post(
                      `http://localhost:3000/api/blog/blogDetail`,
                      {
                        id: Number(session.data?.user.id),
                      }
                    );
                    setPost(posts.data.reverse())
                  }
                  // Example usage
                  const blogId = props.id; // Replace with the actual blog ID
                  deleteBlogPost(blogId).then(()=>{
                    data()
                  });
                }}
                className="hover:cursor-pointer bg-zinc-800 px-5 py-2 flex gap-2 rounded-md items-center text-sm font-semibold"
              >
                <Image src={del} className="w-5 h-5" alt=""></Image> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="text-lg line-clamp-1 mt-2 font-semibold">
        {props.title}
      </div>

      <div className="h-[35vh] bg-gradient-to-r from-zinc-700 via-black to-zinc-700 relative flex items-center justify-center w-full  rounded-md mt-2">
        <div className=" hover:line-clamp-none absolute w-full bottom-0 p-5 rounded-b-md left-0 bg-zinc-900/50 mt-1">
          <div className="line-clamp-3">{props.content}</div>
        </div>
        <Image
          className="max-h-full h-auto w-auto max-w-full rounded-md border border-zinc-500 overflow-hidden"
          width={1000}
          height={1000}
          src={props.image}
          alt=""
        ></Image>
      </div>
      <div className="flex gap-5 mt-3 items-center">
        <button className="bg-zinc-700 gap-1 flex items-center hover:bg-zinc-700 text-white font-bold h-8  rounded-full">
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image className="h-4 w-5 " src={up} alt=""></Image>
          </div>
          {props.vote}
          <div className="h-8 w-10 justify-center rounded-full items-center hover:bg-red-700 flex">
            <Image className="h-4 w-5 " src={down} alt=""></Image>
          </div>
        </button>
        <Button className="bg-zinc-700 items-center gap-1 text-white font-bold text-sm h-8 rounded-full">
          <Image
            className="h-4 w-4 mr-1 relative top-[2px]"
            src={comment}
            alt=""
          ></Image>
          175
        </Button>
      </div>
    </div>
  );
};

export default Post;
